import type { Plugin } from "vite";
import { init, parse } from "es-module-lexer";
import MagicString from "magic-string";

export function phosphorImports(): Plugin {
	const lib = "@phosphor-icons/react";
	const fileRE = /\.[cm]?[jt]sx?$/;

	return {
		name: "phosphor-import-rewrite",
		enforce: "pre",

		async transform(code, id) {
			if (!fileRE.test(id)) return null;
			if (!code.includes(lib)) return null;

			// ✅ Safe SSR detection (no crash if import.meta/env missing)
			const isSSR =
				typeof import.meta !== "undefined" &&
				typeof import.meta.env !== "undefined" &&
				Boolean((import.meta as any).env?.SSR);

			const target = isSSR ? "ssr" : "csr";

			try {
				await init;
				const [imports] = parse(code);
				let s: MagicString | undefined;

				for (const imp of imports) {
					const importStr = code.slice(imp.ss, imp.se);
					if (!importStr.includes(lib)) continue;
					if (importStr.startsWith("import type")) continue;

					const namedMatch = importStr.match(/\{([^}]+)\}/);
					if (!namedMatch) continue; // skip if no named imports

					const specifiers = namedMatch[1]
						.split(",")
						.map((s) => s.trim())
						.filter(Boolean);

					const replacementImports: string[] = [];
					const keepNamed: string[] = [];

					for (const spec of specifiers) {
						const asMatch = spec.match(
							/^([A-Za-z0-9_]+)\s+as\s+([A-Za-z0-9_]+)$/,
						);
						const imported = (asMatch ? asMatch[1] : spec).trim();
						const local = (asMatch ? asMatch[2] : spec).trim();

						if (imported.endsWith("Icon")) {
							const base = imported.replace(/Icon$/, "");
							const deep = `${lib}/dist/${target}/${base}`;
							replacementImports.push(
								`import { ${imported} as ${local} } from "${deep}";`,
							);
						} else {
							keepNamed.push(spec);
						}
					}

					let newImport = "";
					if (keepNamed.length > 0) {
						newImport = `import { ${keepNamed.join(", ")} } from "${lib}";\n`;
					}

					const finalBlock = newImport + replacementImports.join("\n") + "\n";

					if (!s) s = new MagicString(code);
					s.overwrite(imp.ss, imp.se, finalBlock.trimEnd());
				}

				if (!s) return null;
				return {
					code: s.toString(),
					map: s.generateMap({ hires: true }),
				};
			} catch (err) {
				this.warn?.(
					`[phosphor-import-rewrite] Skipping ${id} due to parse error: ${err}`,
				);
				return null;
			}
		},
	};
}

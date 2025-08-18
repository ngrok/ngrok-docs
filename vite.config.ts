import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import mdx from "@mdx-js/rollup";
import sitemap from "@qalisa/vike-plugin-sitemap";
import { recmaCodeHike, remarkCodeHike } from "codehike/mdx";
import rehypeSlug from "rehype-slug";
import remarkCustomHeadingId from "remark-custom-heading-id";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { remarkMdxToc } from "remark-mdx-toc";
import vike from "vike/plugin";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { logSuccess, logWarning } from "./pages/utils/errorLogging";
import {
	BASE_SITE_URL,
	CONTENT_ROOT,
	DOCS_PATH,
	LLMS_CONTENT,
	PROJECT_ROOT,
	ROBOTS_CONTENT,
} from "./pages/utils/globals/config";
import { calloutWrapper } from "./plugins/callout-wrapper";
import definitionWrapperPlugin from "./plugins/definition-wrapper";
import remarkRemoveH1s from "./plugins/remove-h1s";

// Plugin to watch content directory for changes
const contentWatcher = (): Plugin => ({
	name: "content-watcher",
	configureServer(server) {
		server.watcher.add(path.resolve(__dirname, "./content"));

		let debounceTimer: NodeJS.Timeout | null = null;

		const handleFileChange = (file: string) => {
			const contentDir = path.resolve(__dirname, "./content");
			if (file.startsWith(contentDir)) {
				if (debounceTimer) {
					clearTimeout(debounceTimer);
				}
				(global as any).isSidebarBuilding = true;

				debounceTimer = setTimeout(() => {
					console.log("🔄 Rebuilding sidebar...");
					(global as any).isSidebarBuilding = true;
					const child = spawn("pnpm", ["run", "sidebar"], {
						shell: true,
						stdio: "inherit",
					});

					child.on("close", (code) => {
						(global as any).isSidebarBuilding = false;
						if (code === 0) {
							console.log("✅ Sidebar script completed successfully");
						} else {
							console.log(`❌ Sidebar script failed with code ${code}`);
						}
					});
					debounceTimer = null;
				}, 3000);
			}
		};

		server.watcher.on("change", handleFileChange);
		server.watcher.on("add", handleFileChange);
		server.watcher.on("unlink", handleFileChange);
		server.watcher.on("addDir", handleFileChange);
		server.watcher.on("unlinkDir", handleFileChange);
	},
});

// Plugin to watch pages/docs directory for changes and run sidebar script
const pagesDocsWatcher = (): Plugin => ({
	name: "pages-docs-watcher",
	configureServer(server) {
		server.watcher.add(path.resolve(__dirname, "./pages/docs"));

		let debounceTimer: NodeJS.Timeout | null = null;

		const handleFileChange = (file: string) => {
			const pagesDocsDir = path.resolve(__dirname, "./pages/docs");
			if (file.startsWith(pagesDocsDir)) {
				if (debounceTimer) {
					clearTimeout(debounceTimer);
				}
				(global as any).isSidebarBuilding = true;

				debounceTimer = setTimeout(() => {
					console.log("🔄 Rebuilding sidebar...");
					(global as any).isSidebarBuilding = true;
					const child = spawn("pnpm", ["run", "sidebar"], {
						shell: true,
						stdio: "inherit",
					});

					child.on("close", (code) => {
						(global as any).isSidebarBuilding = false;
						if (code === 0) {
							console.log("✅ Sidebar script completed successfully");
						} else {
							console.log(`❌ Sidebar script failed with code ${code}`);
						}
					});
					debounceTimer = null;
				}, 3000);
			}
		};

		server.watcher.on("change", handleFileChange);
		server.watcher.on("add", handleFileChange);
		server.watcher.on("unlink", handleFileChange);
		server.watcher.on("addDir", handleFileChange);
		server.watcher.on("unlinkDir", handleFileChange);
	},
});

// Plugin to watch navData.ts for changes and run sidebar script
const navDataWatcher = (): Plugin => ({
	name: "navdata-watcher",
	configureServer(server) {
		const navDataPath = path.resolve(__dirname, "./pages/utils/navData.ts");
		const sidebarGenerationPath = path.resolve(
			__dirname,
			"./pages/utils/sidebarGeneration.ts",
		);
		server.watcher.add(navDataPath);
		server.watcher.add(sidebarGenerationPath);

		let debounceTimer: NodeJS.Timeout | null = null;

		server.watcher.on("change", (file) => {
			if (file === navDataPath || file === sidebarGenerationPath) {
				if (debounceTimer) {
					clearTimeout(debounceTimer);
				}
				(global as any).isSidebarBuilding = true;

				debounceTimer = setTimeout(() => {
					console.log("🔄 Rebuilding sidebar...");

					const child = spawn("pnpm", ["run", "sidebar"], {
						shell: true,
						stdio: "inherit",
					});

					child.on("close", (code) => {
						(global as any).isSidebarBuilding = false;
						if (code === 0) {
							console.log("✅ Sidebar script completed successfully");
						} else {
							console.log(`❌ Sidebar script failed with code ${code}`);
						}
					});
					debounceTimer = null;
				}, 3000);
			}
		});
	},
});

const codeHikeConfig = {
	components: {
		code: "Code",
	},
};

export const ALIAS_MAPPINGS = {
	"@components": path.join(PROJECT_ROOT, "pages", "components"),
	"@content": path.join(PROJECT_ROOT, "content"),
	"@shared": path.join(PROJECT_ROOT, "content", "shared"),
	"@site": CONTENT_ROOT, // Legacy alias for backwards compatibility
	"~": path.join(PROJECT_ROOT, "pages"),
	"@root": PROJECT_ROOT,
	"@docs": DOCS_PATH,
	"@pages": path.join(PROJECT_ROOT, "pages"),
	"@utils": path.join(PROJECT_ROOT, "pages", "utils"),
	"@static": path.join(PROJECT_ROOT, "static"),
};

export default defineConfig(({ command }) => {
	return {
		test: {
			globals: true,
		},
		server: {
			port: 5173,
		},
		ssr: {
			noExternal: ["@docsearch/react", "@phosphor-icons/react"],
		},
		resolve: {
			alias: ALIAS_MAPPINGS,
		},
		plugins: [
			contentWatcher(),
			pagesDocsWatcher(),
			navDataWatcher(),
			!process.env.VITEST && vike({}),
			tsconfigPaths(),
			mdx({
				remarkPlugins: [
					remarkRemoveH1s,
					remarkGfm,
					remarkDirective,
					calloutWrapper,
					[remarkCodeHike, codeHikeConfig],
					remarkFrontmatter,
					[remarkMdxFrontmatter, { name: "frontmatter" }],
					remarkCustomHeadingId,
					[remarkMdxToc as any, { name: "toc" }],
				],
				recmaPlugins: [[recmaCodeHike, codeHikeConfig]],
				rehypePlugins: [rehypeSlug, definitionWrapperPlugin],
				providerImportSource: "@mdx-js/react",
			}),
			// Only build sitemap in prod
			command === "build" &&
				sitemap({
					baseUrl: BASE_SITE_URL,
					robots: false, // Disable automatic robots.txt generation - we use our own LLM-optimized version
				}),
			// Fix Windows backslashes in sitemap URLs
			command === "build" &&
				({
					name: "fix-sitemap-paths",
					async closeBundle() {
						const sitemapPath = path.join("dist", "client", "sitemap.xml");
						try {
							const content = await fs.readFile(sitemapPath, "utf8");
							const fixedContent = content
								.replaceAll("\\", "/")
								.replaceAll(".com//", "");
							await fs.writeFile(sitemapPath, fixedContent, "utf8");
							console.log("✅ Fixed sitemap path separators");
						} catch {
							// Sitemap might not exist, that's ok
						}
					},
				} as Plugin),
			// Generate LLM-optimized robots.txt (runs after sitemap plugin)
			command === "build" &&
				({
					name: "generate-robots-txt",
					enforce: "post",
					async writeBundle() {
						const robotsPath = path.join("dist", "client", "robots.txt");
						const robotsContent = ROBOTS_CONTENT;

						try {
							await fs.writeFile(robotsPath, robotsContent, "utf8");
							logSuccess({
								title: "Robots.txt generation",
								message: "✅ Generated LLM-optimized robots.txt",
							});
						} catch (error) {
							logWarning({
								title: "Robots.txt generation error",
								message: "⚠️ Failed to generate robots.txt",
								error,
							});
						}

						// Also generate LLMs.txt for AI crawlers
						const llmsPath = path.join("dist", "client", "llms.txt");
						const llmsContent = LLMS_CONTENT;

						try {
							await fs.writeFile(llmsPath, llmsContent, "utf8");
							logSuccess({
								title: "LLMs.txt generation",
								message: "✅ Generated LLMs.txt for AI systems",
							});
						} catch (error) {
							logWarning({
								title: "LLMs.txt generation error",
								message: "⚠️ Failed to generate llms.txt",
								error,
							});
						}
					},
				} as Plugin),
		],
	};
});

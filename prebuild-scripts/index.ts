import { execSync } from "node:child_process";
import { readdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";

async function runPrebuildScripts() {
	console.log("🔄 Discovering and running prebuild scripts...\n");

	try {
		// Read all files in the prebuild-scripts directory
		const files = await readdir("prebuild-scripts");

		// Filter for TypeScript files, excluding index.ts
		const scriptFiles = files
			.filter(
				(file) => extname(file) === ".ts" && basename(file) !== "index.ts",
			)
			.sort(); // Sort for consistent execution order

		if (scriptFiles.length === 0) {
			console.log("⚠️  No prebuild scripts found in prebuild-scripts directory");
			return;
		}

		console.log(`📋 Found ${scriptFiles.length} prebuild script(s):`);
		scriptFiles.forEach((script) => console.log(`   - ${script}`));
		console.log("");

		// Run each script using tsx
		for (const script of scriptFiles) {
			const scriptPath = join("prebuild-scripts", script);
			try {
				console.log(`🚀 Running: ${script}...`);
				execSync(`npx tsx ${scriptPath}`, {
					stdio: "inherit",
					cwd: process.cwd(),
				});
				console.log(`✅ Completed: ${script}\n`);
			} catch (error) {
				console.error(`❌ Error running ${script}:`, error);
				process.exit(1); // Exit with error code to stop the build process
			}
		}

		console.log("🎉 All prebuild scripts completed successfully!");
	} catch (error) {
		console.error("❌ Error discovering prebuild scripts:", error);
		process.exit(1);
	}
}

runPrebuildScripts();

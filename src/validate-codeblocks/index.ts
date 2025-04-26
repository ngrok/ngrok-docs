#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import { validateCodeblocks } from "./validator";

program
	.name("validate-codeblocks")
	.description("Validates code blocks in markdown files")
	.option(
		"-d, --paths <paths...>",
		"Paths to scan for markdown files (directories or individual files)",
		["docs", "examples", "traffic-policy"],
	)
	.option(
		"-w, --warnings",
		"Allow warnings (exit with success even if validation fails)",
		false,
	)
	.option("-v, --verbose", "Show verbose output", false)
	.option("-q, --quiet", "Hide success messages (only show errors)", false)
	.parse(process.argv);

const options = program.opts();

// Handle direct file arguments passed to the script
// This makes command like `pnpm validate-codeblocks:quiet path/to/file.md` work
const args = program.args;
if (args.length > 0 && !options.paths.includes(args[0])) {
	// Override default paths with the file argument
	options.paths = args;
}

async function main() {
	try {
		const { validFiles, invalidFiles } = await validateCodeblocks({
			paths: options.paths,
			verbose: options.verbose,
			showSuccess: !options.quiet,
		});

		// Output summary
		console.log(chalk.bold("\nValidation Summary:"));
		console.log(chalk.green(`✓ Valid: ${validFiles.length} files`));

		if (invalidFiles.length > 0) {
			console.log(chalk.red(`✗ Invalid: ${invalidFiles.length} files`));

			if (options.warnings) {
				console.log(
					chalk.yellow("\nExiting with success due to --warnings flag"),
				);
				process.exit(0);
			} else {
				process.exit(1);
			}
		} else {
			console.log(chalk.green("\nAll code blocks validated successfully!"));
		}
	} catch (error) {
		// Add type checking before accessing properties
		const errorMessage = error instanceof Error ? error.message : String(error);

		console.error(chalk.red(`Error during validation: ${errorMessage}`));
		process.exit(1);
	}
}

main();

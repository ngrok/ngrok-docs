import fs from "node:fs/promises";
import chalk from "chalk";
import globby from "globby";
import MarkdownIt from "markdown-it";
import YAML from "yaml";

interface ValidationOptions {
	paths: string[];
	verbose?: boolean;
	showSuccess?: boolean;
}

interface ValidationResult {
	validFiles: string[];
	invalidFiles: string[];
}

interface CodeBlockInfo {
	language: string | null;
	value: string;
	startLine: number;
	file: string;
}

export async function validateCodeblocks(
	options: ValidationOptions,
): Promise<ValidationResult> {
	const { paths, verbose = false, showSuccess = true } = options;
	const validFiles: string[] = [];
	const invalidFiles: string[] = [];

	// Process each path - could be a file or directory
	const files: string[] = [];

	try {
		for (const path of paths) {
			try {
				const stats = await fs.stat(path).catch(() => null);

				if (stats?.isDirectory()) {
					// If it's a directory, glob inside it
					const dirFiles = await globby(`${path}/**/*.{md,mdx}`);
					files.push(...dirFiles);
				} else if (stats?.isFile()) {
					// If it's a file and has .md or .mdx extension, add it directly
					if (path.endsWith(".md") || path.endsWith(".mdx")) {
						files.push(path);
					}
				} else if (verbose) {
					console.log(
						chalk.yellow(`Warning: Path not found or not accessible: ${path}`),
					);
				}
			} catch (error) {
				// Handle errors for individual paths
				const errorMessage =
					error instanceof Error ? error.message : String(error);
				console.error(
					chalk.red(`Error processing path ${path}: ${errorMessage}`),
				);
			}
		}
	} catch (error) {
		// Handle catastrophic errors
		const errorMessage = error instanceof Error ? error.message : String(error);
		console.error(chalk.red(`Error during path processing: ${errorMessage}`));
		return { validFiles, invalidFiles };
	}

	if (verbose) {
		console.log(chalk.blue(`Found ${files.length} markdown files to validate`));
	}

	for (const file of files) {
		if (verbose) {
			console.log(chalk.blue(`\nValidating ${file}...`));
		}

		try {
			const content = await fs.readFile(file, "utf-8");
			const codeBlocks = extractCodeBlocks(content, file);

			if (verbose && codeBlocks.length > 0) {
				console.log(chalk.blue(`Found ${codeBlocks.length} code blocks`));
			}

			let fileValid = true;

			for (const block of codeBlocks) {
				const { language, value, startLine } = block;

				// Skip validation if we couldn't detect the language, if it's not YAML/JSON,
				// or if it has the skip-validation tag
				if (
					!language ||
					language.includes("skip-validation") ||
					(language.toLowerCase() !== "yaml" &&
						language.toLowerCase() !== "yml" &&
						language.toLowerCase() !== "json")
				) {
					if (verbose) {
						if (!language) {
							console.log(
								chalk.yellow(
									`  Line ${startLine}: No language could be detected, skipping validation`,
								),
							);
						} else {
							console.log(
								chalk.blue(
									`  Line ${startLine}: Language is ${language}, not YAML/JSON, skipping validation`,
								),
							);
						}
					}
					continue;
				}

				const validationResult = validateCodeBlock(value, language);

				if (validationResult.isValid) {
					if (showSuccess) {
						console.log(
							chalk.green(
								`  ✓ ${file}, Line ${startLine}: Valid ${language} code`,
							),
						);
					}
					// Additional verbose information could go here if needed
					// if (verbose) {
					//   // Show more details about the validation
					// }
				} else {
					console.log(
						chalk.red(
							`  ✗ ${file}, Line ${startLine}: Invalid ${language} code`,
						),
					);
					if (validationResult.errorMessage) {
						console.log(
							chalk.red(`    Error: ${validationResult.errorMessage}`),
						);
					}
					console.log(chalk.gray("    Code block:"));
					console.log(
						chalk.gray(
							`    ${value.slice(0, 200).split("\n").join("\n    ")}${value.length > 200 ? "..." : ""}`,
						),
					);
					fileValid = false;
				}
			}

			if (fileValid) {
				validFiles.push(file);
			} else {
				invalidFiles.push(file);
			}
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.error(chalk.red(`Error processing ${file}: ${errorMessage}`));
			invalidFiles.push(file);
		}
	}

	return { validFiles, invalidFiles };
}

export function extractCodeBlocks(
	content: string,
	filePath: string,
): CodeBlockInfo[] {
	const blocks: CodeBlockInfo[] = [];
	const md = new MarkdownIt();

	// Parse the markdown content
	const tokens = md.parse(content, {});

	// Process tokens to find code blocks
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];

		if (token && token.type === "fence") {
			// 'fence' is markdown-it's term for a code block
			const language = token.info?.trim() || null;
			const code = token.content || "";

			// Calculate the line number by counting newlines before the token's map start position
			// token.map[0] is the line index (0-based) where the token starts
			// We add 1 to convert to 1-based line numbers for user-friendly display
			const startLine =
				token.map && token.map[0] !== undefined ? token.map[0] + 1 : 0;

			blocks.push({
				language: language || detectLanguage(code),
				value: code,
				startLine: startLine,
				file: filePath,
			});
		}
	}

	return blocks;
}

export function detectLanguage(code: string): string | null {
	// Simple language detection based on patterns
	const trimmedCode = code.trim();

	// JSON detection
	if (
		(trimmedCode.startsWith("{") && trimmedCode.endsWith("}")) ||
		(trimmedCode.startsWith("[") && trimmedCode.endsWith("]"))
	) {
		return "json";
	}

	// YAML detection
	if (
		trimmedCode.includes(":") &&
		!trimmedCode.includes("{") &&
		!trimmedCode.includes(";")
	) {
		const lines = trimmedCode.split("\n");
		if (lines.some((line) => line.trim().match(/^\w+:\s*.+$/))) {
			return "yaml";
		}
	}

	// Default to null if we can't detect the language
	return null;
}

interface CodeBlockValidationResult {
	isValid: boolean;
	errorMessage?: string;
}

function validateCodeBlock(
	code: string,
	language: string,
): CodeBlockValidationResult {
	try {
		switch (language.toLowerCase()) {
			case "json":
				JSON.parse(code); // Will throw if invalid
				return { isValid: true };

			case "yaml":
			case "yml":
				// Check if content has multiple YAML documents (separated by ---)
				if (code.includes("\n---") || code.startsWith("---")) {
					// Parse all documents in the stream
					YAML.parseAllDocuments(code);
				} else {
					// Parse single document
					YAML.parse(code);
				}
				return { isValid: true };

			// Add more language validators here as needed

			default:
				// For languages we don't validate yet, return true
				return { isValid: true };
		}
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		return { isValid: false, errorMessage };
	}
}

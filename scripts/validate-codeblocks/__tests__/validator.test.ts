import fs from "node:fs/promises";
import path from "node:path";
import { validateCodeblocks } from "../validator";

const TEST_DIR = path.join(__dirname, "test-files");

describe("Code Block Validator", () => {
	test("should skip non-YAML/JSON language blocks", async () => {
		const result = await validateCodeblocks({
			paths: [path.join(TEST_DIR, "non-yaml-languages.md")],
			verbose: false,
		});

		// The file has YAML and JSON blocks, but also Shell and JS blocks that should be skipped
		// Overall the file should pass validation
		expect(result.validFiles.length).toBe(1);
		expect(result.invalidFiles.length).toBe(0);
	});

	test("should validate valid code blocks correctly", async () => {
		const result = await validateCodeblocks({
			paths: [path.join(TEST_DIR, "valid.md")],
			verbose: false,
		});

		expect(result.validFiles.length).toBe(1);
		expect(result.invalidFiles.length).toBe(0);
	});

	test("should detect invalid code blocks correctly", async () => {
		const result = await validateCodeblocks({
			paths: [path.join(TEST_DIR, "invalid.md")],
			verbose: false,
		});

		expect(result.validFiles.length).toBe(0);
		expect(result.invalidFiles.length).toBe(1);
	});

	test("should validate multiple files correctly", async () => {
		// Get the actual test files in the directory
		const testFiles = await fs.readdir(TEST_DIR);

		// Map of files that should be invalid (all others should be valid)
		const expectedInvalidFiles = ["invalid.md"];

		const result = await validateCodeblocks({
			paths: testFiles.map(file => path.join(TEST_DIR, file)),
			verbose: false,
		});

		// Verify we have expected number of files processed
		expect(result.validFiles.length + result.invalidFiles.length).toBe(
			testFiles.length,
		);

		// Check if all files are categorized correctly
		// Since we're using absolute paths in tinyglobby results, we need to check for the end of the path
		for (const file of testFiles) {
			const shouldBeInvalid = expectedInvalidFiles.includes(file);

			if (shouldBeInvalid) {
				// Check that at least one invalid file path ends with our expected path
				expect(result.invalidFiles.some((p) => p.endsWith(file))).toBe(true);
			} else {
				// Check that at least one valid file path ends with our expected path
				expect(result.validFiles.some((p) => p.endsWith(file))).toBe(true);
			}
		}
	});

	test("should handle multi-document YAML correctly", async () => {
		const result = await validateCodeblocks({
			paths: [path.join(TEST_DIR, "multi-yaml.md")],
			verbose: false,
		});

		expect(result.validFiles.length).toBe(1);
		expect(result.invalidFiles.length).toBe(0);
	});

	test("should handle non-existent paths gracefully", async () => {
		const result = await validateCodeblocks({
			paths: [`/path-that-does-not-exist-${Date.now()}`],
			verbose: false,
		});

		// We expect the function to handle non-existent paths and return empty arrays
		expect(result.validFiles.length).toBe(0);
		expect(result.invalidFiles.length).toBe(0);
	});
});

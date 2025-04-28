import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { validateCodeblocks } from "../validator";

describe("Code Block Validator - Non YAML/JSON Skipping", () => {
	test("should skip code blocks with non-YAML/JSON languages", async () => {
		const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "validator-test-"));
		const testFile = path.join(tempDir, "test.md");

		// Create a test file with different code blocks
		const fileContent =
			'# Test Document\n\n## YAML Block (valid)\n```yaml\napiVersion: v1\nkind: Pod\n```\n\n## JSON Block (valid)\n```json\n{ "name": "test" }\n```\n\n## Shell Block (should be skipped)\n```sh\necho "This should be skipped"\n---\necho "Invalid YAML but valid shell"\n```\n\n## JavaScript Block (should be skipped)\n```js\nconst x = { a: 1 };\nconsole.log(x);\n```\n';

		await fs.writeFile(testFile, fileContent);

		try {
			// Run validation with verbose mode off to avoid cluttering test output
			const result = await validateCodeblocks({
				paths: [testFile],
				verbose: false,
			});

			// The file should be valid since we're skipping non-YAML/JSON blocks
			expect(result.validFiles.length).toBe(1);
			expect(result.invalidFiles.length).toBe(0);
		} finally {
			// Clean up
			await fs.rm(tempDir, { recursive: true, force: true });
		}
	});
});

import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { extractCodeBlocks } from "../validator";

// Ensure fs functions are real for our tests
jest.unmock("node:fs/promises");

describe("Line Position Accuracy", () => {
	const testContent = `# Test Document for Line Positions

This is a test document with code blocks at known positions.

## First code block starts at line 7

\`\`\`yaml
key: value
list:
  - item1
  - item2
\`\`\`

Some text in between.

## Second code block starts at line 17

\`\`\`json
{
  "name": "test",
  "value": 123
}
\`\`\`

## Third block with specific indentation starts at line 27

Indented paragraph:
  \`\`\`javascript
  function test() {
    console.log("hello");
  }
  \`\`\`

## Fourth block right after another starts at line 36
\`\`\`yaml
more: yaml
data: here
\`\`\`
`;

	let tempFilePath: string;

	beforeAll(async () => {
		// Create a temporary file with our test content
		const tempDir = await fs.mkdtemp(
			path.join(os.tmpdir(), "line-position-test-"),
		);
		tempFilePath = path.join(tempDir, "test.md");
		await fs.writeFile(tempFilePath, testContent, "utf-8");
	});

	test("reports accurate line numbers for code blocks", async () => {
		// Extract code blocks from the test file
		const codeBlocks = extractCodeBlocks(testContent, tempFilePath);

		// Verify we found all 4 code blocks
		expect(codeBlocks.length).toBe(4);

		// Verify code blocks were detected correctly
		expect(codeBlocks.length).toBe(4);
		expect(codeBlocks[0]?.language).toBe("yaml");
		expect(codeBlocks[1]?.language).toBe("json");
		expect(codeBlocks[2]?.language).toBe("javascript");
		expect(codeBlocks[3]?.language).toBe("yaml");

		// Print the actual line numbers for debugging
		console.log(
			"Actual line numbers:",
			codeBlocks.map((block) => block.startLine),
		);

		// Verify we have the required elements before comparing
		expect(codeBlocks.length).toBeGreaterThanOrEqual(4);

		// Use non-null assertion here after verifying the array length above
		// We need startLine to be treated as numbers, not undefined
		const startLine0 = codeBlocks[0]?.startLine || 0;
		const startLine1 = codeBlocks[1]?.startLine || 0;
		const startLine2 = codeBlocks[2]?.startLine || 0;
		const startLine3 = codeBlocks[3]?.startLine || 0;

		// Verify line numbers are in the correct order and increasing
		expect(startLine0).toBeLessThan(startLine1);
		expect(startLine1).toBeLessThan(startLine2);
		expect(startLine2).toBeLessThan(startLine3);

		// Verify specific line numbers based on our markdown-it implementation
		expect(codeBlocks[0]?.startLine).toBe(7);
		expect(codeBlocks[1]?.startLine).toBe(18);
		expect(codeBlocks[2]?.startLine).toBe(28); // Indented code block
		expect(codeBlocks[3]?.startLine).toBe(35);
	});
});

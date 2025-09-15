export function joinYamlDocs(...docs: string[]): string {
	return docs.map((doc) => doc.trim()).join("\n---\n");
}

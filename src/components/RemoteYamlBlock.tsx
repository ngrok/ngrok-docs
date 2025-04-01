import React, { useEffect, useState } from "react";
import DocsCodeBlock from "./code-block";

interface RemoteYamlBlockProps {
	url: string;
	title?: string;
}

const RemoteYamlBlock: React.FC<RemoteYamlBlockProps> = ({
	url,
	title,
}: RemoteYamlBlockProps) => {
	const [yamlContent, setYamlContent] = useState<string>("");

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) throw new Error(`Failed to fetch YAML: ${res.statusText}`);
				return res.text();
			})
			.then((data) => setYamlContent(data))
			.catch((err) => {
				console.error(err);
				setYamlContent("⚠️ Error loading YAML file.");
			});
	}, [url]);

	return (
		<DocsCodeBlock language="yaml" title={title}>
			{yamlContent || "Loading..."}
		</DocsCodeBlock>
	);
};

export default RemoteYamlBlock;

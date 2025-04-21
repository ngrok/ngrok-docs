import type React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface RemoteMarkdownEmbedderProps {
	url: string;
	textToRemove?: string;
}

const RemoteMarkdownEmbedder: React.FC<RemoteMarkdownEmbedderProps> = ({
	url,
	textToRemove,
}: RemoteMarkdownEmbedderProps) => {
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		fetch(url)
			.then((res) => res.text())
			.then(setContent);
	}, [url]);

	if (!content) {
		return (
			<pre className="min-h-[3.25rem] p-4 pr-[3.375rem] font-mono text-mono">
				Loading ...
			</pre>
		);
	}

	const finalContent = textToRemove
		? content.replace(textToRemove, "")
		: content;

	return <ReactMarkdown>{finalContent}</ReactMarkdown>;
};

export default RemoteMarkdownEmbedder;

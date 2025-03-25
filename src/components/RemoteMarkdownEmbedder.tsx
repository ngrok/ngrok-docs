import React, { useEffect, useState } from "react";
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

	const finalContent = textToRemove
		? content.replace(textToRemove, "")
		: content;

	return <ReactMarkdown>{finalContent}</ReactMarkdown>;
};

export default RemoteMarkdownEmbedder;

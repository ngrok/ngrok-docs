import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface RemoteMarkdownEmbedderProps {
	url: string;
}

const RemoteMarkdownEmbedder: React.FC<RemoteMarkdownEmbedderProps> = ({
	url,
}: RemoteMarkdownEmbedderProps) => {
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		fetch(url)
			.then((res) => res.text())
			.then(setContent);
	}, [url]);

	return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default RemoteMarkdownEmbedder;

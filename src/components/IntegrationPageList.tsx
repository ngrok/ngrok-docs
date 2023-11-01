import React from "react";
import NgrokCard from "./NgrokCard";
import { useIntegration } from "./integrations/use-integrations";

type Props = {
	name: string;
};

export default function IntegrationPageList({ name }: Props) {
	const integration = useIntegration(name);

	if (!integration) {
		return null;
	}

	return (
		<ul className="m-0 mb-5 list-none grid grid-cols-2 gap-5" role="list">
			{integration.docs.map((doc) => (
				<li key={doc.path}>
					<NgrokCard
						to={doc.path}
						size="sm"
						title={doc.frontMatter?.title || doc.contentTitle}
						description={doc.frontMatter?.description || doc.excerpt}
					/>
				</li>
			))}
		</ul>
	);
}

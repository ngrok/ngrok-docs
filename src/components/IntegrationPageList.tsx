import React, { useEffect }  from "react";
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

	useEffect(() => {
		if (integration.docs.length === 1) {
		  setTimeout(() => {
			window.location.reload();
			window.location.href = integration.docs[0].path;
		  }, 0);
		}
	  }, [integration.docs.length, integration.docs[0].path]);

	return (
		<ul className="m-0 mb-5 grid list-none grid-cols-2 gap-5 p-0" role="list">
			{integration.docs.map((doc) => (
				<li className="last-of-type:col-span-full" key={doc.path}>
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

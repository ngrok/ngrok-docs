import { useIntegration } from "./integrations/use-integrations";
import NgrokCard from "./NgrokCard";

type Props = {
	name: string;
};

export default function IntegrationPageList({ name }: Props) {
	const integration = useIntegration(name);

	if (!integration) {
		return null;
	}

	return (
		<ul className="m-0 mb-5 grid list-none grid-cols-2 gap-5 p-0" role="list">
			{integration.docs.map((doc) => {
				const docTitle =
					doc.frontMatter?.title || doc.contentTitle || doc?.frontMatter?.name;
				return (
					<li className="last-of-type:col-span-full" key={doc.path}>
						<NgrokCard
							to={doc.path}
							size="sm"
							title={docTitle || "Integration"}
							description={doc.frontMatter?.description || doc.excerpt}
						/>
					</li>
				);
			})}
		</ul>
	);
}

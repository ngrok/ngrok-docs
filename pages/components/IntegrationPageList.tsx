import { useIntegration } from "../hooks/use-integrations";
import LinkCard from "./LinkCard";

type Props = {
	name: string;
};

export default function IntegrationPageList({ name }: Props) {
	const integration = useIntegration(name);

	if (!integration) {
		return null;
	}

	return (
		<div className="ngrok--cards grid md:grid-cols-2 gap-4 my-8">
			{integration.docs.map((doc) => {
				if (doc?.frontmatter?.title?.includes("Hub")) {
					return null;
				}
				return (
					<LinkCard
						key={doc.path}
						title={doc.frontmatter?.title || doc.contentTitle || "Integration"}
						href={doc.path}
						body={doc.frontmatter?.description || doc.excerpt || ""}
					/>
				);
			})}
		</div>
	);
}

import { useIntegrations } from "../hooks/use-integrations";
import CardGrid from "./CardGrid";

export default function IntegrationsList() {
	const integrations = useIntegrations();

	const cards = integrations.map((integration) => ({
		title: integration.metadata?.sidebar_label || integration.name,
		href: integration.path,
		body: integration.metadata?.excerpt || "",
		img: integration.metadata?.logo,
		imgAlt: integration.metadata?.name,
	}));

	return <CardGrid cards={cards} />;
}

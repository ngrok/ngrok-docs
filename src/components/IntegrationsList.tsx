import NgrokCard from "./NgrokCard";
import { useIntegrations } from "./integrations/use-integrations";

export default function IntegrationsList() {
	const integrations = useIntegrations();

	console.log("==============");
	console.log("Integrations:", integrations);
	console.log("==============");

	return (
		<ul className="m-0 mb-5 grid list-none grid-cols-2 gap-5 p-0">
			{integrations.map((integration) => (
				<li className="last-of-type:col-span-full" key={integration.name}>
					<NgrokCard
						to={integration.path}
						size="sm"
						img={integration.metadata?.logo}
						imgAlt={integration.metadata?.name}
						title={integration.metadata?.sidebar_label || integration.name}
						description={integration.metadata?.excerpt}
					/>
				</li>
			))}
		</ul>
	);
}

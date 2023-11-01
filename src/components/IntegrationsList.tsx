import React from "react";
import NgrokCard from "./NgrokCard";
import { useIntegrations } from "./integrations/use-integrations";

export default function IntegrationsList() {
	const integrations = useIntegrations();

	return (
		<ul className="m-0 mb-5 list-none grid grid-cols-2 gap-5" role="list">
			{integrations.map((integration) => (
				<li key={integration.name}>
					<NgrokCard
						to={integration.path}
						size="sm"
						img={integration.metadata?.logo}
						title={integration.metadata?.sidebar_label || integration.name}
						description={integration.metadata?.excerpt}
					/>
				</li>
			))}
		</ul>
	);
}

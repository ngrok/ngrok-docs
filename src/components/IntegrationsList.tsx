import React from "react";
import NgrokCard from "./NgrokCard";
import { useIntegrations, returnPathFromIntegration } from "./integrations/use-integrations";

export default function IntegrationsList() {
	const integrations = useIntegrations();

	return (
		<ul className="m-0 mb-5 grid list-none grid-cols-2 gap-5 p-0" role="list">
			{integrations.map((integration) => (
				<li className="last-of-type:col-span-full" key={integration.name}>
					<NgrokCard
						to={returnPathFromIntegration(integration)}
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


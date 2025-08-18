import integrationsData from "@root/generated/integrations/integrations-data.json";
import { parseIntegrations } from "@root/prebuild-scripts/integrations/schema";

// Fetch the integrations data from the generated JSON file
function getIntegrationsData() {
	return integrationsData;
}

export function useIntegrations() {
	const rawData = getIntegrationsData();
	return parseIntegrations(rawData);
}

export function useIntegration(name: string) {
	const integrations = useIntegrations();

	// case insensitive search
	return integrations.find(
		(item) => item.name.toLowerCase() === name.toLowerCase(),
	);
}

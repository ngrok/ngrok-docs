import { usePluginData } from "@docusaurus/useGlobalData";
import { parseIntegrations } from "./schema";

const pluginKey = "ngrok-parse-integrations" as const;

export function useIntegrations() {
	const rawData = usePluginData(pluginKey);
	return parseIntegrations(rawData);
}

export function useIntegration(name: string) {
	const integrations = useIntegrations();

	// case insensitive search
	return integrations.find(
		(item) => item.name.toLowerCase() === name.toLowerCase(),
	);
}

export function returnPathFromIntegration(integration){
    var returnValue = integration.path;
	if(integration.docs.length==1){
		returnValue = integration.docs[0].path
	}
    return returnValue;

}

export function returnPathFromDoc(doc){
	var returnValue = doc.path;
    return returnValue;
}
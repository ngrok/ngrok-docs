import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import { useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { logError } from "~/utils/errorLogging";
import { transformItems } from "./utils/transformItems";

export function CustomDocSearch() {
	const { data } = usePageContext();
	if (!data || !(data as any).algoliaInfo) {
		logError({
			title: "DocSearch Initialization Error",
			message: "Algolia information is missing in the root's loader data",
		});
	}
	const { algoliaInfo } = data as any;

	useEffect(() => {
		// Inject CSS to make DocSearch respond to Mantle theme classes
		const styleId = "docsearch-theme-fix";
		if (document.getElementById(styleId)) {
			return; // Already injected
		}

		const style = document.createElement("style");
		style.id = styleId;
		style.textContent = `
      /* Map dark and dark-high-contrast themes to DocSearch dark mode */
      html.dark,
      html.dark-high-contrast {
        --docsearch-text-color: #f5f6f7;
        --docsearch-container-background: rgba(9,10,17,.8);
        --docsearch-modal-background: #15172a;
        --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;
        --docsearch-searchbox-background: #090a11;
        --docsearch-searchbox-focus-background: #000;
        --docsearch-hit-color: #bec3c9;
        --docsearch-hit-shadow: none;
        --docsearch-hit-background: #090a11;
        --docsearch-key-gradient: linear-gradient(-26.5deg,#565872,#31355b);
        --docsearch-key-shadow: inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,.3);
        --docsearch-key-pressed-shadow: inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 1px 1px 0 #0304094d;
        --docsearch-footer-background: #1e2136;
        --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73,76,106,.5),0 -4px 8px 0 rgba(0,0,0,.2);
        --docsearch-logo-color: #fff;
        --docsearch-muted-color: #7f8497;
      }
    `;
		document.head.appendChild(style);

		return () => {
			const styleElement = document.getElementById(styleId);
			if (styleElement) {
				styleElement.remove();
			}
		};
	}, []);

	return (
		<DocSearch
			apiKey={algoliaInfo.apiKey}
			indexName={algoliaInfo.indexName}
			appId={algoliaInfo.appId}
			transformItems={transformItems}
		/>
	);
}

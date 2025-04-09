import renderRoutes from "@docusaurus/renderRoutes";
import {
	HtmlClassNameProvider,
	ThemeClassNames,
} from "@docusaurus/theme-common";
import { ThemeProvider } from "@ngrok/mantle/theme-provider";
import type { Props } from "@theme/DocVersionRoot";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

export default function DocsRoot(props: Props): ReactNode {
	return (
		<HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.docsPages)}>
			<ThemeProvider>
				<Layout>{renderRoutes(props.route.routes)}</Layout>
			</ThemeProvider>
		</HtmlClassNameProvider>
	);
}

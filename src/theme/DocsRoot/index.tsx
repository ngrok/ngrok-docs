import renderRoutes from "@docusaurus/renderRoutes";
import {
	HtmlClassNameProvider,
	ThemeClassNames,
} from "@docusaurus/theme-common";
import {
	MantleThemeHeadContent,
	ThemeProvider,
} from "@ngrok/mantle/theme-provider";
import type { Props } from "@theme/DocVersionRoot";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { type ReactNode } from "react";

export default function DocsRoot(props: Props): ReactNode {
	return (
		<HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.docsPages)}>
			<MantleThemeHeadContent />
			<ThemeProvider>
				<Layout>{renderRoutes(props.route.routes!)}</Layout>
			</ThemeProvider>
		</HtmlClassNameProvider>
	);
}

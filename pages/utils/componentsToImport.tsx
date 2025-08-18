import Callout from "@components/Callout";
import Code from "@components/Code";
import DocsCodeBlock from "@components/code-block";
import { Definition } from "@components/Definition";
import { Heading } from "@components/Heading";
import { Image } from "@components/Image";
import { LangSwitcher } from "@components/LangSwitcher";
import { ContentSwitcher } from "@components/LangSwitcher/ContentSwitcher";
import { Link } from "@components/Link";
import {
	EndpointUrlHostname,
	EndpointUrlOrigin,
} from "@components/search-params-endpoint-url";
import Tabs from "@components/Tabs";
import TabItem from "@components/Tabs/TabItem";
import ReactMarkdown from "react-markdown";

/* Global components that will:
 * 1. replace existing tags like <code> or <a>
 * 2. be available in all MDX files without needing to import them
 *
 * NOTE: To replace <code> and <pre> you must also add your component to
 * codehike in vite.config.ts
 */
export const globalComponents = {
	h1: (props: any) => <Heading as="h1" {...props} />,
	h2: (props: any) => <Heading as="h2" {...props} />,
	h3: (props: any) => <Heading as="h3" {...props} />,
	h4: (props: any) => <Heading as="h4" {...props} />,
	h5: (props: any) => <Heading as="h5" {...props} />,
	h6: (props: any) => <Heading as="h6" {...props} />,
	a: (props: any) => <Link {...props} />, // replaces <a>
	// code: DocsCodeBlock, // replaces <code></code>
	// replaces <code>
	DocsCodeBlock,
	// Callout,
	LangSwitcher,
	ContentSwitcher,
	Definition,
	Tabs,
	TabItem,
	Link,
	EndpointUrlHostname,
	EndpointUrlOrigin,
	ReactMarkdown,
	Code,
	code: Code,
	Image,
	img: Image,
	Callout,
};

import * as mdxModule from "./+Page.mdx";

const { default: MdxContent } = mdxModule;

export function Page(pageProps: any) {
	return <MdxContent {...pageProps} />;
}

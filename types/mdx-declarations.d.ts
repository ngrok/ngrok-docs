declare module "*.mdx" {
	const Component: React.ComponentType;
	export const frontmatter: any;
	export default Component;
}

declare module "../generated/sidebar/autoGenSidebarData.json" {
	const data: any;
	export default data;
}

declare module "../../generated/sidebar/autoGenSidebarData.json" {
	const data: any;
	export default data;
}

declare module "~/types" {
	export const HeadersFunction: any;
	export type NonNullProperties<T> = {
		[K in keyof T]: NonNullable<T[K]>;
	};
}

declare module "@vercel/remix" {
	export const HeadersFunction: any;
}

declare module "@remix-run/node" {
	export const redirect: any;
	export const json: any;
}

declare module "@remix-run/react" {
	export const useLoaderData: any;
	export const Form: any;
	export type NavigateFunction = (to: string, options?: any) => void;
}

declare module "../../theme/Tabs/TabListContext" {
	export const TabListContext: any;
}

import DocSidebar from "@theme-original/DocSidebar";
import SearchBar from "@theme/SearchBar";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function DocSidebarWrapper(props: any) {
	return (
		<div>
			<SearchBar {...props} />
			<DocSidebar {...props} />
		</div>
	);
}

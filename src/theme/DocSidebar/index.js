import DocSidebar from "@theme-original/DocSidebar";
import SearchBar from "@theme/SearchBar";

export default function DocSidebarWrapper(props) {
	return (
		<>
			<SearchBar {...props} />
			<DocSidebar {...props} />
		</>
	);
}

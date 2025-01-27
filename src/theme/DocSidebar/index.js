import DocSidebar from "@theme-original/DocSidebar";
import SearchBar from "@theme/SearchBar";
import React from "react";

export default function DocSidebarWrapper(props) {
	return (
		<>
			<SearchBar {...props} />
			<DocSidebar {...props} />
		</>
	);
}

import React from "react";
import DocSidebar from "@theme-original/DocSidebar";
import SearchBar from "@theme-original/SearchBar";

export default function DocSidebarWrapper(props) {
	return (
		<>
			<SearchBar {...props} />
			<DocSidebar {...props} />
		</>
	);
}

import type { WrapperProps } from "@docusaurus/types";
// @ts-ignore
import SearchBar from "@theme-original/SearchBar";
// @ts-ignore
import type SearchBarType from "@theme/SearchBar";
import React from "react";
import { FontSwitcher } from "../components/FontSwitcher";

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): JSX.Element {
	return (
		<>
			<FontSwitcher />
			<SearchBar {...props} />
		</>
	);
}

import Link from "@docusaurus/Link";
import { Anchor } from "@ngrok/mantle/anchor";
import type { Props } from "@theme/MDXComponents/A";

export default function MDXA(props: Props) {
	return (
		<Anchor asChild>
			<Link {...props} />
		</Anchor>
	);
}

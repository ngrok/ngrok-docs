import { themes, useTheme } from "@ngrok/mantle/theme-provider";
import { Link } from "./Link";

export function DocsLogo(props: any) {
	const [currentTheme] = useTheme();

	const logoLink = "/docs/";
	const logoAlt = "ngrok documentation logo";

	// temporary for testing. Remove this when ready for production
	const darkModeLogo = (
		<Link to={logoLink}>
			<img {...props} src="/docs-logos/ngrok-white.svg" alt={logoAlt} />
		</Link>
	);
	const lightModeLogo = (
		<Link to={logoLink}>
			<img {...props} src="/docs-logos/ngrok-black.svg" alt={logoAlt} />
		</Link>
	);

	switch (currentTheme) {
		// system - default to light on server to match client initial render
		case themes[0]:
			return lightModeLogo;
		// light & light high contrast
		case themes[1]:
		case themes[3]:
			return lightModeLogo;
		// dark & dark high contrast
		case themes[2]:
		case themes[4]:
			return darkModeLogo;
	}
}

import { useEffect, useState } from "react";

interface ClientOnlyProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

/**
 * Replacement for @docusaurus/BrowserOnly
 * Renders children only on the client side
 */
export default function ClientOnly({
	children,
	fallback = null,
}: ClientOnlyProps) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return <>{fallback}</>;
	}

	return <>{children}</>;
}

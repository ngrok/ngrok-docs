import { Button } from "@ngrok/mantle/button";
import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when user scrolls down 300px
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed bottom-8 right-8 z-50">
			<Button
				type="button"
				appearance="filled"
				onClick={scrollToTop}
				className="shadow-lg hover:shadow-xl transition-shadow"
			>
				<span className="flex items-center gap-2">
					Back to top
					<ArrowUp size={16} />
				</span>
			</Button>
		</div>
	);
}

import { cx } from "@ngrok/mantle/cx";
import type { WithStyleProps } from "@ngrok/mantle/types";
import { forwardRef } from "react";
import type { PropsWithChildren } from "react";
import linkStyles from "./panel.module.css";

type PanelProps = WithStyleProps & PropsWithChildren;

/**
 * A semantic component to <section /> out setup sections
 */
const PanelImpl = forwardRef<HTMLDivElement, PanelProps>(
	({ className, children, ...rest }, ref) => (
		<section ref={ref} className={className} {...rest}>
			{children}
		</section>
	),
);

type PanelHeaderProps = WithStyleProps &
	PropsWithChildren & {
		closed?: boolean;
		onChange?: (state: boolean) => void;
	};

// Note: Card inside of card doesn't quite make compositional sense -- like how a header in a header is nonsense

/**
 * A panel heading component that contains collapsing callbacks to cordinate open/closing panel content
 */
export const PanelHeader = ({
	closed,
	children,
	onChange,
	className,
	style,
}: PanelHeaderProps) => {
	return (
		<div
			tabIndex={closed ? 0 : -1}
			style={style}
			className={cx(
				"rounded px-6 pb-2 pt-3",
				closed && "cursor-pointer",
				onChange && !closed && "mb-2",
				className,
			)}
			onKeyDown={(e) => {
				if (!closed || typeof onChange === "undefined") {
					return;
				}

				switch (e.key) {
					case "Space":
					case "Enter":
						onChange(false);
						return;
					default:
						return;
				}
			}}
			onClick={() => {
				if (typeof onChange !== "undefined" && closed) {
					onChange(false);
				}
			}}
		>
			{typeof onChange !== "undefined" && (
				<button
					type="button"
					className={cx(linkStyles.link, "float-right text-black")}
					onClick={() => onChange(!closed)}
				>
					{closed ? "Expand" : "Collapse"}
				</button>
			)}
			{children}
		</div>
	);
};

type PanelBodyProps = WithStyleProps &
	PropsWithChildren & {
		closed?: boolean;
	};

/**
 * A panel body component that utilizes a compositional closed/open prop state
 */
export const PanelBody = ({
	closed,
	children,
	className,
	style,
}: PanelBodyProps) => {
	return (
		<div
			className={cx(
				"rounded bg-card",
				"px-6 py-3",
				className,
				typeof closed !== "undefined" && closed ? "hidden" : "",
			)}
			style={style}
		>
			{children}
		</div>
	);
};

export const Panel = Object.assign(PanelImpl, {
	Header: PanelHeader,
	Body: PanelBody,
});

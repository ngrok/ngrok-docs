import { Button } from "@ngrok/mantle/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ngrok/mantle/dropdown-menu";
import { Icon } from "@ngrok/mantle/icon";
import { CopyIcon, CopySimpleIcon, FileTextIcon } from "@phosphor-icons/react";
import { copyPageAsMarkdown, viewPageAsMarkdown } from "./utils";

export function MarkdownExportDropdown({
	showMobile = false,
	className,
}: {
	showMobile?: boolean;
	className?: string;
}) {
	const iconStyles = "pr-1";
	const menuItemStyles = "hover:text-brand flex";
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					appearance="ghost"
					type="button"
					className={`text-sm ${showMobile ? "p-0 h-8 w-8 flex items-center justify-center border-none" : "pl-1 hover:text-brand-link"} ${className || ""}`}
				>
					<Icon svg={<CopySimpleIcon />} /> {showMobile ? "" : "Copy page"}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="">
				<DropdownMenuItem onClick={copyPageAsMarkdown}>
					<span className={menuItemStyles}>
						<Icon className={iconStyles} svg={<CopyIcon />} />
						Copy page as markdown
					</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					className={menuItemStyles}
					onClick={viewPageAsMarkdown}
				>
					<span className={menuItemStyles}>
						<Icon className={iconStyles} svg={<FileTextIcon />} />
						View page as markdown
					</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

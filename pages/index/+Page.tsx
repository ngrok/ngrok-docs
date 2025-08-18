import { Button } from "@ngrok/mantle/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@ngrok/mantle/hover-card";
import { Icon } from "@ngrok/mantle/icon";
import { CalendarIcon } from "@phosphor-icons/react/Calendar";
import { ShrimpIcon } from "@phosphor-icons/react/Shrimp";
import { render } from "vike/abort";

export default function Page() {
	throw render(404);
	// biome-ignore lint/correctness/noUnreachable: This is intentional for redirecting to 404
	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-6">Welcome to ngrok docs</h1>
			<p className="mb-8">
				This is the home page powered by Vike with Mantle design system.
			</p>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold">Testing Mantle Components:</h2>

				<HoverCard>
					<HoverCardTrigger asChild>
						<Button type="button" appearance="link">
							Hover over me to see the card!
						</Button>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex justify-between space-x-4">
							<div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-pink-300">
								<Icon svg={<ShrimpIcon />} className="size-12" />
							</div>
							<div className="space-y-1">
								<h4 className="text-sm font-semibold">@ngrok/mantle</h4>
								<p className="text-sm">
									The Design System – created and maintained by @ngrok.
								</p>
								<div className="flex items-center pt-2">
									<Icon
										svg={<CalendarIcon />}
										className="mr-2 h-4 w-4 opacity-70"
									/>
									<span className="text-muted-foreground text-xs">
										Joined November 2023
									</span>
								</div>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</div>
		</div>
	);
}

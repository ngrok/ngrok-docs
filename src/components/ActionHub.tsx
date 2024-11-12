import Link from "@docusaurus/Link";
import { Badge } from "@ngrok/mantle/badge";
import { Button } from "@ngrok/mantle/button";
import { Card, CardBody, CardFooter } from "@ngrok/mantle/card";
import { Input, InputCapture } from "@ngrok/mantle/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ngrok/mantle/select";
import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";

const DefaultPhaseValue = "any";
const DefaultProtocolValue = "any";

const Phases = ["on_tcp_connect", "on_http_request", "on_http_response"];

const Protocols = {
	TCP: ["on_tcp_connect"],
	HTTP: ["on_http_request", "on_http_response"],
};

type Action = {
	id?: string;
	type: string;
	name: string;
	description: string;
	categories: string[];
	phases: string[];
};

type Category = {
	id: string;
	name: string;
	description: string;
};

type Props = {
	actions: Action[];
	categories: Category[];
};

export default function ActionHub({ actions }: Props) {
	const [protocolFilter, setProtocolFilter] = useState(DefaultProtocolValue);
	const [phaseFilter, setPhaseFilter] = useState(DefaultPhaseValue);
	const [actionSearch, setActionSearch] = useState("");

	const clearFilters = () => {
		setPhaseFilter(DefaultPhaseValue);
		setActionSearch("");
	};

	const sortedActions = actions.sort((a, b) => a.type.localeCompare(b.type));

	let filteredActions = sortedActions;

	if (protocolFilter != DefaultProtocolValue) {
		filteredActions = filteredActions.filter((action) => {
			const protocols = Protocols[protocolFilter];
			let exists = 0;
			for (let index = 0; index < protocols.length; index++) {
				const protocol = protocols[index];
				if (action.phases.includes(protocol)) {
					exists++;
				}
			}
			return exists;
		});
	}

	if (phaseFilter != DefaultPhaseValue) {
		filteredActions = filteredActions.filter((action) =>
			// Filter by phase if set
			action.phases.includes(phaseFilter),
		);
	}

	if (actionSearch) {
		filteredActions = filteredActions.filter(
			(action) =>
				// Filter by name or description if actionSearch is set
				action.type.toLowerCase().includes(actionSearch.toLowerCase()) ||
				action.name.toLowerCase().includes(actionSearch.toLowerCase()) ||
				action.description.toLowerCase().includes(actionSearch.toLowerCase()),
		);
	}

	return (
		<>
			<div className="mb-4 flex flex-wrap justify-between gap-4">
				<Input
					className="max-w-64 font-sans"
					placeholder="Filter..."
					value={actionSearch}
					onChange={(e) => setActionSearch(e.target.value)}
				>
					<MagnifyingGlass />
					<InputCapture />
				</Input>

				<div className="flex gap-2">
					<Select value={protocolFilter} onChange={setProtocolFilter}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Filter by Phase" />
						</SelectTrigger>
						<SelectContent width="trigger">
							<SelectItem value={DefaultProtocolValue}>
								All Protocols
							</SelectItem>
							{Object.keys(Protocols).map((protocol) => (
								<SelectItem value={protocol}>{protocol}</SelectItem>
							))}
						</SelectContent>
					</Select>

					<Select value={phaseFilter} onChange={setPhaseFilter}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Filter by Phase" />
						</SelectTrigger>
						<SelectContent width="trigger">
							<SelectItem value={DefaultPhaseValue}>All Phases</SelectItem>
							{Phases.map((phase) => (
								<SelectItem value={phase}>{phase}</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			{!!filteredActions.length && (
				<div className="ngrok--cards grid grid-cols-2 gap-4">
					{filteredActions.map((action) => (
						<Link
							key={action.name}
							to={`/traffic-policy/actions/${action.type}`}
							className="col-span-1"
						>
							<Card className="flex h-full flex-col divide-y-0 hover:bg-card-hover">
								<h3 className="m-0 flex items-baseline gap-2 px-4 pb-2 pt-4">
									{action.type}
								</h3>
								<CardBody className="flex-grow p-0 px-4">
									<p className="m-0 p-0">{action.description}</p>
								</CardBody>
								<CardFooter className="px-4 pb-4">
									<div className="flex flex-wrap gap-2">
										{action.phases
											.sort((a, b) => a.localeCompare(b))
											.map((phase) => {
												switch (phase) {
													case "on_tcp_connect":
														return (
															<Badge appearance="muted" color="blue">
																{phase}
															</Badge>
														);
													case "on_http_request":
														return (
															<Badge appearance="muted" color="pink">
																{phase}
															</Badge>
														);
													case "on_http_response":
														return (
															<Badge appearance="muted" color="pink">
																{phase}
															</Badge>
														);
												}
											})}
									</div>
								</CardFooter>
							</Card>
						</Link>
					))}
				</div>
			)}
			{!filteredActions.length && (
				<div className="flex flex-col justify-center p-4 text-center">
					<p>
						No actions found with the phrase <b>{actionSearch}</b> on{" "}
						<b>{phaseFilter}</b> phase.
					</p>
					<div>
						<Button type="button" onClick={clearFilters}>
							Clear Filters
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

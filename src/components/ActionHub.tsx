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

const Phases = ["on_tcp_connect", "on_http_request", "on_http_response"];

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
	const [phaseFilter, setPhaseFilter] = useState(DefaultPhaseValue);
	const [actionSearch, setActionSearch] = useState("");

	const clearFilters = () => {
		setPhaseFilter(DefaultPhaseValue);
		setActionSearch("");
	};

	const sortedActions = actions.sort((a, b) => a.type.localeCompare(b.type));

	let filteredActions = sortedActions;

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
				action.name.toLowerCase().includes(actionSearch.toLowerCase()) ||
				action.description.toLowerCase().includes(actionSearch.toLowerCase()),
		);
	}

	return (
		<>
			<div className="mb-4 flex flex-wrap justify-between gap-4">
				<Input
					className="max-w-64"
					placeholder="Search..."
					value={actionSearch}
					onChange={(e) => setActionSearch(e.target.value)}
				>
					<MagnifyingGlass />
					<InputCapture />
				</Input>

				<Select value={phaseFilter} onChange={setPhaseFilter}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filter by Phase" />
					</SelectTrigger>
					<SelectContent width="trigger">
						<SelectItem value={DefaultPhaseValue}>Any Phase</SelectItem>
						{Phases.map((phase) => (
							<SelectItem value={phase}>{phase}</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{!!filteredActions.length && (
				<div className="ngrok--cards grid grid-cols-2 gap-4">
					{filteredActions.map((action) => (
						<Link
							key={action.name}
							to={`/traffic-policy/actions/${action.type}`}
							className="col-span-1"
						>
							<Card className="h-full divide-y-0 hover:shadow-md">
								<h3 className="m-0 flex justify-between px-6 pb-2 pt-4">
									{action.name}{" "}
									<span className="text-xs text-placeholder">
										{action.type}
									</span>
								</h3>
								<CardBody className="p-0 px-6">
									<p className="m-0">{action.description}</p>
								</CardBody>
								<CardFooter className="flex flex-wrap gap-2">
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
														<Badge appearance="muted" color="fuchsia">
															{phase}
														</Badge>
													);
											}
										})}
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
						<Button type="button" onClick={clearFilters}>Clear Filters</Button>
					</div>
				</div>
			)}
		</>
	);
}

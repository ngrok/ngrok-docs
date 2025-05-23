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
import { useState } from "react";

const DefaultCategoryValue = "any";

const DefaultPhaseValue = "any";
const DefaultProtocolValue = "any";

type Action = {
	id?: string;
	slug: string;
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

export default function ActionHub({ actions, categories }: Props) {
	const [protocolFilter, setProtocolFilter] = useState(DefaultProtocolValue);
	const [phaseFilter, setPhaseFilter] = useState(DefaultPhaseValue);

	const [categoryFilter, setCategoryFilter] = useState(DefaultCategoryValue);
	const [actionSearch, setActionSearch] = useState("");

	const clearFilters = () => {
		setCategoryFilter(DefaultPhaseValue);
		setActionSearch("");
	};

	const sortedActions = actions.sort((a, b) => a.slug.localeCompare(b.slug));

	let filteredActions = sortedActions;

	if (protocolFilter !== DefaultProtocolValue) {
		filteredActions = filteredActions.filter((action) => {
			const protocols = Protocols[protocolFilter];
			let exists = 0;
			if (protocols) {
				for (let index = 0; index < protocols.length; index++) {
					const protocol = protocols[index];
					if (protocol && action.phases.includes(protocol)) {
						exists++;
					}
				}
			}
			return exists;
		});
	}

	if (categoryFilter !== DefaultCategoryValue) {
		console.log(categoryFilter)
		filteredActions = filteredActions.filter((action) =>
			// Filter by phase if set
			action.categories.includes(categoryFilter),
		);
	}


	if (phaseFilter !== DefaultPhaseValue) {
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
					onChange={(event) => setActionSearch(event.target.value)}
				>
					<MagnifyingGlass />
					<InputCapture />
				</Input>

				<div className="flex gap-2">
					<Select value={categoryFilter} onValueChange={setCategoryFilter}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Filter by Category" />
						</SelectTrigger>
						<SelectContent width="trigger">
							<SelectItem value={DefaultCategoryValue}>All categories</SelectItem>
							{categories.map((category) => (
								<SelectItem key={category.id} value={category.id}>
									{category.name}
								</SelectItem>
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
							to={`/universal-gateway/examples/${action.slug}`}
							className="col-span-1"
						>
							<Card className="flex h-full flex-col divide-y-0 hover:bg-card-hover">
								<h3 className="m-0 flex items-baseline gap-2 px-4 pb-2 pt-4">
									{action.name}
								</h3>
								<CardBody className="flex-grow p-0 px-4">
									<p className="m-0 p-0">{action.description}</p>
								</CardBody>
								<CardFooter className="px-4 pb-4">
									<div className="flex flex-wrap gap-2">
										{action.categories
											.sort((a, b) => a.localeCompare(b))
											.map((category) => {
												return (
													<Badge appearance="muted" color="pink">
														{category}
													</Badge>
												)
											})
										}
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
						No examples found with the phrase <b>{actionSearch}</b> in the {" "}
						<b>{categoryFilter}</b> category.
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

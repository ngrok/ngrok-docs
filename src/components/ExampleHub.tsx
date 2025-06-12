import Link from "@docusaurus/Link";
import { Badge } from "@ngrok/mantle/badge";
import { Button } from "@ngrok/mantle/button";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ngrok/mantle/card";
import type { Color } from "@ngrok/mantle/color";
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
	color: Color;
};

type Props = {
	actions: Action[];
	categories: Category[];
};

export default function ActionHub({ actions, categories }: Props) {
	const [categoryFilter, setCategoryFilter] = useState(DefaultCategoryValue);
	const [actionSearch, setActionSearch] = useState("");

	// Create a map of category ID to name
	const categoryMap = Object.fromEntries(
    categories.map((cat) => [cat.id, { name: cat.name, color: cat.color ?? "gray" }]),
	);

	const clearFilters = () => {
		setCategoryFilter(DefaultPhaseValue);
		setActionSearch("");
	};

	let filteredActions = actions;

	if (categoryFilter !== DefaultCategoryValue) {
		filteredActions = filteredActions.filter((action) =>
			// Filter by phase if set
			action.categories.includes(categoryFilter),
		);
	}

	if (actionSearch) {
		filteredActions = filteredActions.filter(
			(action) =>
				// Filter by name or description if actionSearch is set
				action.slug.toLowerCase().includes(actionSearch.toLowerCase()) ||
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
							<SelectItem value={DefaultCategoryValue}>
								All categories
							</SelectItem>
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
							<Card className="flex h-full flex-col hover:bg-card-hover">
								<CardHeader>
									<CardTitle className="mb-0">{action.name}</CardTitle>
								</CardHeader>
								<CardBody className="flex-grow py-4 px-6">
									<p className="m-0 p-0">{action.description}</p>
								</CardBody>
								<CardFooter className="px-6">
									<div className="flex flex-wrap gap-2">
										{action.categories
											.sort((a, b) => a.localeCompare(b))
											.map((categoryId) => {
													const meta = categoryMap[categoryId] ?? { name: categoryId, color: "gray" };
													return (
														<Badge key={categoryId} appearance="muted" color={meta.color}>
															{meta.name}
														</Badge>
													);
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
						No examples found with the phrase <b>{actionSearch}</b> in the{" "}
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

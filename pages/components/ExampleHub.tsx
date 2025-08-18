import { Link } from "@components/Link";
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

// Renamed from Action to Example for clearer domain context
type Example = {
	id?: string;
	slug: string;
	name: string;
	description: string;
	categories: [string, ...string[]];
	phases: string[];
};

type Category = {
	id: string;
	name: string;
	description: string;
	color: Color;
};

type Props = {
	examples: Example[];
	categories: Category[];
};

export default function ExampleHub({ examples, categories }: Props) {
	const [categoryFilter, setCategoryFilter] = useState(DefaultCategoryValue);
	const [exampleSearch, setExampleSearch] = useState("");

	// Enhanced: Map category ID to display name and color from YAML
	const categoryMap = Object.fromEntries(
		categories.map((cat) => [
			cat.id,
			{ name: cat.name, color: cat.color ?? "gray" },
		]),
	);

	const clearFilters = () => {
		setCategoryFilter(DefaultPhaseValue);
		setExampleSearch("");
	};

	let filteredExamples = examples;

	if (categoryFilter !== DefaultCategoryValue) {
		filteredExamples = filteredExamples.filter((example) =>
			example.categories.includes(categoryFilter),
		);
	}

	if (exampleSearch) {
		filteredExamples = filteredExamples.filter(
			(example) =>
				example.slug.toLowerCase().includes(exampleSearch.toLowerCase()) ||
				example.name.toLowerCase().includes(exampleSearch.toLowerCase()) ||
				example.description.toLowerCase().includes(exampleSearch.toLowerCase()),
		);
	}

	// Added: Assign primary category for grouping
	const examplesWithPrimary = filteredExamples.map((example) => ({
		...example,
		primaryCategoryId: example.categories[0],
	}));

	// Added: Group examples by primary category
	const groupedExamples = new Map<string, Example[]>();
	for (const example of examplesWithPrimary) {
		const group = groupedExamples.get(example.primaryCategoryId) ?? [];
		group.push(example);
		groupedExamples.set(example.primaryCategoryId, group);
	}

	return (
		<>
			<div className="mb-4 flex flex-wrap justify-between gap-4">
				<Input
					className="max-w-64 font-sans"
					placeholder="Filter..."
					value={exampleSearch}
					onChange={(event) => setExampleSearch(event.target.value)}
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

			{categories.map((cat) => {
				const examplesInGroup = groupedExamples.get(cat.id);
				if (!examplesInGroup || !examplesInGroup.length) return null;

				return (
					<section key={cat.id} className="my-8">
						<h2 className="text-xl font-bold mb-2">{cat.name}</h2>
						<div className="ngrok--cards grid md:grid-cols-2 gap-4">
							{examplesInGroup.map((example) => (
								<Link
									key={example.name}
									to={`/universal-gateway/examples/${example.slug}`}
									className="col-span-1 pt-3"
								>
									<Card className="flex pb-2.5 h-full flex-col hover:bg-card-hover">
										<CardHeader>
											<CardTitle className="mb-0">{example.name}</CardTitle>
										</CardHeader>
										<CardBody className="flex-grow py-4 px-6">
											<p className="m-0 p-0">{example.description}</p>
										</CardBody>
										<CardFooter className="px-6">
											<div className="flex flex-wrap gap-2">
												{example.categories
													.sort((a, b) => a.localeCompare(b))
													.map((categoryId) => {
														const meta = categoryMap[categoryId] ?? {
															name: categoryId,
															color: "gray",
														};
														return (
															<Badge
																key={categoryId}
																appearance="muted"
																color={meta.color}
															>
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
					</section>
				);
			})}

			{!filteredExamples.length && (
				<div className="flex flex-col justify-center p-4 text-center">
					<p>
						No examples found with the phrase <b>{exampleSearch}</b> in the{" "}
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

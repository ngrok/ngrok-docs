
export const ActionHub = ({ actions }) => {

const DefaultPhaseValue = "any";
const DefaultProtocolValue = "any";
const DefaultTerminatingValue = "any";

const Phases = ["on_tcp_connect", "on_http_request", "on_http_response", "on_event_stream_message"];

const Protocols = {
	TCP: ["on_tcp_connect"],
	HTTP: ["on_http_request", "on_http_response"],
};
	const [protocolFilter, setProtocolFilter] = useState(DefaultProtocolValue);
	const [phaseFilter, setPhaseFilter] = useState(DefaultPhaseValue);
	const [actionSearch, setActionSearch] = useState("");
	const [terminatingFilter, setTerminatingFilter] = useState(DefaultTerminatingValue);

	// Map phase to color for badges
	const phaseColorMap = {
		"on_tcp_connect": "blue",
		"on_http_request": "green",
		"on_http_response": "purple",
		"on_event_stream_message": "orange"
	};

	const clearFilters = () => {
		setPhaseFilter(DefaultPhaseValue);
		setProtocolFilter(DefaultProtocolValue);
		setActionSearch("");
		setTerminatingFilter(DefaultTerminatingValue);
	};

	const sortedActions = actions.sort((a, b) => a.type.localeCompare(b.type));

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

	if (phaseFilter !== DefaultPhaseValue) {
		filteredActions = filteredActions.filter((action) =>
			// Filter by phase if set
			action.phases.includes(phaseFilter),
		);
	}

	if (terminatingFilter !== DefaultTerminatingValue) {
		filteredActions = filteredActions.filter((action) =>
			// Filter by terminating if set
			terminatingFilter === "true" ? action.terminating === true : action.terminating !== true,
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

	// Sort actions alphabetically by type
	const sortedFilteredActions = filteredActions.sort((a, b) => a.type.localeCompare(b.type));

	// Reserve vertical space to prevent CLS on page load.
	// 3000px covers ~26 action cards in a 2-column grid.
	return (
		<div style={{ minHeight: 3000 }}>
			<div className="mb-4 flex flex-wrap justify-between place-items-end gap-4">
				<div className="relative max-w-64">
					<input
						type="text"
						className="w-full dark:placeholder-white dark:text-white placeholder-black text-black pl-3 pr-3 py-2 border border-gray-300 rounded-md font-sans"
						placeholder="Filter..."
						value={actionSearch}
						onChange={(event) => setActionSearch(event.target.value)}
					/>
				</div>

				<div className="flex gap-2">
					<select 
						className="w-[180px] px-3 py-2 border border-gray-300 rounded-md dark:bg-black dark:text-white max-h-[50%]"
						value={protocolFilter} 
						onChange={(e) => setProtocolFilter(e.target.value)}
					>
						<option value={DefaultProtocolValue}>All Protocols</option>
						{Object.keys(Protocols).map((protocol) => (
							<option key={protocol} value={protocol}>
								{protocol}
							</option>
						))}
					</select>

					<select 
						className="w-[180px] px-3 py-2 border border-gray-300 rounded-md dark:bg-black dark:text-white max-h-[50%]"
						value={phaseFilter} 
						onChange={(e) => setPhaseFilter(e.target.value)}
					>
						<option value={DefaultPhaseValue}>All Phases</option>
						{Phases.map((phase) => (
							<option key={phase} value={phase}>
								{phase}
							</option>
						))}
					</select>

					<select 
						className="w-[180px] px-3 py-2 border border-gray-300 rounded-md dark:bg-black dark:text-white max-h-[50%]"
						value={terminatingFilter}
						onChange={(e) => setTerminatingFilter(e.target.value)}
					>
						<option value={DefaultTerminatingValue}>All Types</option>
						<option value="true">Terminating</option>
						<option value="false">Non-terminating</option>
					</select>
				</div>
			</div>

			<Columns cols={2}>
				{sortedFilteredActions.map((action) => (
					<Card 
						key={action.type}
						className="my-8"
						href={action.path}
					>
						<h3 className="text-lg font-bold mb-3">{action.type}</h3>
						<p className="m-0 p-0">{action.description}</p>
						<div className="flex flex-wrap gap-2">                      
							{action.phases
								.sort((a, b) => a.localeCompare(b))
								.map((phase) => {
									const color = phaseColorMap[phase] ?? "gray";
									return (
										<span
											key={phase}
											appearance="muted"
											color={color}
										>
											{phase}
										</span>
									);
								})}
						</div>
						{/* This icon should be positioned to the rigght side of the card */}
						<div className="flex justify-end mt-1">
							<Tooltip tip={action.terminating ? "This is a terminating action. No actions defined after it will be processed." : "This is a non-terminating action. It cannot be the last action in the chain."}>
							{action.terminating ? <Icon icon="stop" /> : <Icon icon="play" />}
							</Tooltip>
						</div>
					</Card>
				))}
			</Columns>
			{!filteredActions.length && (
				<div className="flex flex-col justify-center p-4 text-center">
					<p>
						No actions found with the phrase <b>{actionSearch}</b> for{" "}
						<b>{phaseFilter}</b> phase and <b>{protocolFilter}</b> protocol.
					</p>
					<div>
						<button type="button" onClick={clearFilters}>
							Clear Filters
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

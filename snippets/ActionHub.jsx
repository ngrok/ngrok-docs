import { Icon } from "@ngrok/mantle/icon";

export const ActionHub = () => {

const DefaultPhaseValue = "any";
const DefaultProtocolValue = "any";
const DefaultTerminatingValue = "any";

const actions = [
  {
    type: "add-headers",
    name: "Add Headers",
    description: "Add headers to your incoming requests or outgoing responses.",
    phases: ["on_http_request", "on_http_response"],
    categories: ["request-modification", "response-modification"]
  },
  {
    type: "basic-auth",
    name: "Basic Auth",
    description: "Enforce HTTP Basic Auth for your HTTP endpoints.",
    phases: ["on_http_request"],
    categories: ["security"]
  },
  {
    type: "circuit-breaker",
    name: "Circuit Breaker",
    description: "Maintain system reliability by rejecting requests when error rates exceed defined thresholds.",
    phases: ["on_http_request"],
    categories: ["traffic-control", "request-modification"]
  },
  {
    type: "close-connection",
    name: "Close Connection",
    description: "Close a client's connection to ngrok before it is further processed or tunneled to any of your upstream services.",
    phases: ["on_tcp_connect", "on_http_request"],
    categories: ["traffic-control"],
		terminating: true
  },
  {
    type: "compress-response",
    name: "Compress Response",
    description: "Compress HTTP response bodies from your upstream server.",
    phases: ["on_http_request", "on_http_response"],
    categories: ["response-modification"]
  },
  {
    type: "custom-response",
    name: "Custom Response",
    description: "Send a custom HTTP response directly back to the client.",
    phases: ["on_http_request", "on_http_response"],
    categories: ["response-modification"],
		terminating: true
  },
  {
    type: "deny",
    name: "Deny",
    description: "Deny incoming traffic to your endpoint at the HTTP layer.",
    phases: ["on_http_request", "on_tcp_connect"],
    categories: ["traffic-control", "connection-modification"],
		terminating: true
  },
  {
    type: "forward-internal",
    name: "Forward Internal",
    description: "Forward traffic to an internal endpoint within the same ngrok account.",
    phases: ["on_http_request", "on_tcp_connect"],
    categories: ["traffic-control", "connection-modification"]
  },
  {
    type: "http-request",
    name: "HTTP Request",
    description: "Send an HTTP request to a third-party API and return the response.",
    phases: ["on_http_request", "on_http_response"],
    categories: ["traffic-control", "connection-modification"]
  },
  {
    type: "jwt-validation",
    name: "JWT Validation",
    description: "Validate JSON Web Tokens (JWTs) on your incoming requests.",
    phases: ["on_http_request"],
    categories: ["security"]
  },
  {
    type: "log",
    name: "Log",
    description: "Add log metadata to events for logging and monitoring.",
    phases: ["on_http_request", "on_http_response", "on_tcp_connect"],
    categories: ["connection-modification", "response-modification", "request-modification"]
  },
  {
    type: "oauth",
    name: "OAuth",
    description: "Add OAuth login for your HTTP endpoints.",
    phases: ["on_http_request"],
    categories: ["security"]
  },
  {
    type: "oidc",
    name: "OpenID Connect (OIDC)",
    description: "Add OpenID Connect login for your HTTP endpoints.",
    phases: ["on_http_request"],
    categories: ["security"]
  },
  {
    type: "owasp-crs-request",
    name: "OWASP/CRS Request",
    description: "Add OWASP CoreRuleSet to incoming HTTP requests to your endpoints.",
    phases: ["on_http_request"],
    categories: ["security", "traffic-control", "request-modification"]
  },
  {
    type: "owasp-crs-response",
    name: "OWASP/CRS Response",
    description: "Add OWASP CoreRuleSet to outgoing HTTP responses from your endpoints.",
    phases: ["on_http_response"],
    categories: ["security", "traffic-control", "response-modification"]
  },
  {
    type: "rate-limit",
    name: "Rate Limit",
    description: "Rate limit incoming traffic to your endpoint before it hits your upstream servers.",
    phases: ["on_http_request"],
    categories: ["traffic-control", "request-modification"]
  },
  {
    type: "redirect",
    name: "Redirect",
    description: "Redirect users through URL transformations using regular expressions.",
    phases: ["on_http_request"],
    categories: ["request-modification"]
  },
  {
    type: "request-body-find-replace",
    name: "Request Body Find & Replace",
    description: "Find and replace text patterns in HTTP request bodies using regular expressions.",
    phases: ["on_http_request"],
    categories: ["request-modification"]
  },
  {
    type: "response-body-find-replace",
    name: "Response Body Find & Replace",
    description: "Find and replace text patterns in HTTP response bodies using regular expressions.",
    phases: ["on_http_response"],
    categories: ["response-modification"]
  },
  {
    type: "remove-headers",
    name: "Remove Headers",
    description: "Remove headers from incoming requests or outgoing responses.",
    phases: ["on_http_request", "on_http_response"],
    categories: ["request-modification", "response-modification"]
  },
  {
    type: "restrict-ips",
    name: "Restrict IPs",
    description: "Allow or deny incoming traffic based on the client IP.",
    phases: ["on_http_request", "on_tcp_connect"],
    categories: ["security", "connection-modification"]
  },
  {
    type: "set-vars",
    name: "Set Vars",
    description: "Set custom variables for use in your traffic policy.",
    phases: ["on_http_request", "on_http_response", "on_tcp_connect"],
    categories: ["request-modification", "response-modification", "connection-modification"]
  },
  {
    type: "sse-find-replace",
    name: "SSE Find & Replace",
    description: "Find and replace text patterns in Server-Sent Events (SSE) streams.",
    phases: ["on_event_stream_message"],
    categories: ["response-modification"]
  },
  {
    type: "terminate-tls",
    name: "Terminate TLS",
    description: "Control the behavior of TLS termination on your endpoints.",
    phases: ["on_tcp_connect"],
    categories: ["connection-modification", "security"]
  },
  {
    type: "url-rewrite",
    name: "URL Rewrite",
    description: "Rewrite request URLs transparently using regular expressions.",
    phases: ["on_http_request"],
    categories: ["request-modification"]
  },
  {
    type: "verify-webhook",
    name: "Verify Webhook",
    description: "Validate incoming signatures against a known secret to ensure authenticity.",
    phases: ["on_http_request"],
    categories: ["security"]
  }
];

const Phases = ["on_tcp_connect", "on_http_request", "on_http_response", "on_event_stream_message"];


const Terminating = [true, false];

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
			terminatingFilter === "any" || action.terminating === terminatingFilter,
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

	return (
		<>
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
						defaultValue={DefaultTerminatingValue}
					>
						<option value={DefaultTerminatingValue}>Terminating/Non-terminating</option>
						{Terminating.map((terminating) => (
							<option key={terminating} value={terminating}>
								{terminating}
							</option>
						))}
					</select>
				</div>
			</div>

			<Columns cols={2}>
				{sortedFilteredActions.map((action) => (
					<Card 
						key={action.type}
						className="my-8"
						href={`/traffic-policy/actions/${action.type}`}
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
		</>
	);
};

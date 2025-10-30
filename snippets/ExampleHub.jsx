

export const ExampleHub = ({ parentDir }) => {
	
	const DefaultCategoryValue = "any";
	const DefaultPhaseValue = "any";


  const categories = [
    {
      id: "traffic-control",
      name: "Traffic Control",
      color: "rose"
    },
    {
      id: "request-modification", 
      name: "Request Modification",
      color: "sky"
    },
    {
      id: "response-modification",
      name: "Response Modification", 
      color: "cyan"
    },
    {
      id: "connection-modification",
      name: "Connection Modification",
      color: "yellow"
    },
    {
      id: "security",
      name: "Security & Validation",
      color: "green"
    }
  ];
  
  const examples = [
    {
      slug: "a-b-tests",
      name: "A/B Tests",
      description: "Run simple A/B tests with using the rand.double() macro.",
      categories: ["request-modification", "response-modification"]
    },
    {
      slug: "add-and-remove-headers",
      name: "Add and Remove Headers", 
      description: "Add or remove headers from your incoming requests or outgoing responses.",
      categories: ["request-modification", "response-modification"]
    },
    {
      slug: "add-authentication",
      name: "Add Authentication",
      description: "Enforce authentication on your HTTP endpoints.",
      categories: ["security"]
    },
    {
      slug: "oauth-protection",
      name: "OAuth Protection",
      description: "Enforce OAuth 2.0 authentication on your HTTP endpoints.",
      categories: ["security"]
    },
    {
      slug: "block-unwanted-requests",
      name: "Block Unwanted Requests",
      description: "Block unwanted requests to your endpoints.",
      categories: ["security"]
    },
    {
      slug: "compress-json-responses",
      name: "Compress JSON Response",
      description: "Compress JSON response bodies from your upstream server.",
      categories: ["response-modification"]
    },
    {
      slug: "enforce-tls",
      name: "Enforce TLS",
      description: "Prevent SDKs, obsolete browsers, or CLI tools like curl from attempting to access your API.",
      categories: ["connection-modification", "security"]
    },
    {
      slug: "event-logging",
      name: "Event Logging",
      description: "Log events for monitoring and debugging.",
      categories: ["connection-modification", "response-modification", "request-modification"]
    },
    {
      slug: "rate-limit-requests",
      name: "Rate Limit Requests",
      description: "Rate limit incoming traffic to your endpoint before it hits your upstream servers.",
      categories: ["traffic-control", "request-modification"]
    },
    {
      slug: "route-requests",
      name: "Route Requests",
      description: "Route requests to different upstream services based on request attributes.",
      categories: ["traffic-control", "connection-modification"]
    },
    {
      slug: "url-rewrites",
      name: "URL Rewrites",
      description: "Rewrite request URLs transparently using regular expressions.",
      categories: ["request-modification"]
    },
    {
      slug: "user-agent-filtering",
      name: "User-Agent Filtering",
      description: "Filter requests based on the User-Agent header.",
      categories: ["traffic-control", "connection-modification"]
    }
  ];

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
	const groupedExamples = new Map();
	for (const example of examplesWithPrimary) {
		const group = groupedExamples.get(example.primaryCategoryId) ?? [];
		group.push(example);
		groupedExamples.set(example.primaryCategoryId, group);
	}

	return (
		<>
			<div className="mb-4 flex flex-wrap justify-between place-items-end gap-4">
				<div className="relative max-w-64">
					<input
						type="text"
						className="w-full dark:bg-black dark:placeholder-white dark:text-white placeholder-black text-black px-3 py-2 border border-gray-300 rounded-md font-sans"
						placeholder="Filter..."
						value={exampleSearch}
						onChange={(event) => setExampleSearch(event.target.value)}
					/>
				</div>

				<div className="flex gap-2">
					<select 
						className="w-[180px] px-3 py-2 border border-gray-300 rounded-md dark:bg-black dark:text-white max-h-[50%]"
						value={categoryFilter} 
						onChange={(e) => setCategoryFilter(e.target.value)}
					>
						<option value={DefaultCategoryValue}>All categories</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
			</div>

			{categories.map((cat) => {
				const examplesInGroup = groupedExamples.get(cat.id);
				if (!examplesInGroup || !examplesInGroup.length) return null;

				return (
          <>

          <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
					<Columns cols={2}
            key={cat.id}
          >
            {examplesInGroup.map((example) => (
            <Card 
            className="my-8"
            href={`/${parentDir}/examples/${example.slug}`}
            >
              <h3 className="text-lg font-bold mb-3">{example.name}</h3>
              <p className="m-0 p-0">{example.description}</p>
              <div className="flex flex-wrap gap-2">                      
                  {example.categories
                    .sort((a, b) => a.localeCompare(b))
                    .map((categoryId) => {
                      const meta = categoryMap[categoryId] ?? {
                        name: categoryId,
                        color: "gray",
                      };
                      return (
                        <span
                          key={categoryId}
                          appearance="muted"
                          color={meta.color}
                        >
                          {meta.name}
                        </span>
                      );
                    })}
              </div>
            </Card>
            ))}
					</Columns>
          </>
				);
			})}

			{!filteredExamples.length && (
				<div className="flex flex-col justify-center p-4 text-center">
					<p>
						No examples found with the phrase <b>{exampleSearch}</b> in the{" "}
						<b>{categoryFilter}</b> category.
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
}

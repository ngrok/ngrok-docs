import React from "react";

const CelTemplateSyntaxExplanation = () => {
	const templateSyntax = "${}";

	return (
		<>
			<p>
				The results of CEL expressions can be interpolated into your policy's{" "}
				<code>config</code> using ngrok's <code>{templateSyntax}</code>{" "}
				templating syntax.{" "}
				<em>
					For a complete list of available variables and functions or to see a
					more detailed explanation, checkout the{" "}
					<a href="/docs/http/traffic-policy/expressions/">docs</a>.
				</em>
			</p>
		</>
	);
};

export default CelTemplateSyntaxExplanation;

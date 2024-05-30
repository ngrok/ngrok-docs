import React from "react";
import ConfigExample from "../../src/components/ConfigExample.tsx";

export const config = {
	headers: {
		country: "${conn.geo.country_code}",
	},
};

const VariableInterpolation = (type) => {
	const templateSyntax = "${}";

	return (
		<>
			<h3>Variable Interpolation</h3>
			<p>
				You may interpolate variables into header values. Variables are
				interpolated into headers with JSONPath expressions surrounded by{" "}
				<code>{templateSyntax}</code> syntax.
			</p>
			<p>
				For example, to include geographical data about the client IP that
				initiated the request, you may construct a header value like so.
			</p>
			<ConfigExample config={{ actions: [{ type, config }] }} />
			<p>
				Consult the{" "}
				<a href="/docs/http/request-headers/#variables">Variables Reference</a>{" "}
				for the available variables.
			</p>
		</>
	);
};

export default VariableInterpolation;

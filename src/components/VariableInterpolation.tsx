export const VariableInterpolation = () => (
	<>
		<h3>Variable Interpolation</h3>
		<p>
			You may interpolate variables into header values. Variables are
			interpolated into headers with JSONPath expressions surrounded by the{" "}
			<code>
				${"{"}
				{"}"}
			</code>{" "}
			syntax.
		</p>
		<p>
			For example, to include geographical data about the client IP that
			initiated the request, you may construct a header value like so.
		</p>
	</>
);

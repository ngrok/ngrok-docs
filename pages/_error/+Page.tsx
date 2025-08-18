import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
	const pageContext = usePageContext();
	const { is404, abortStatusCode, abortReason, data } = pageContext;

	// Determine error message based on context
	let errorTitle: string;
	let errorMessage: string;

	if (is404) {
		errorTitle = "404 - Page not found";
		errorMessage = "Sorry, we couldn't find the page you're looking for.";
	} else if (abortStatusCode === 403) {
		errorTitle = "403 - Access denied";
		errorMessage = "You don't have permission to access this page.";
	} else if (abortStatusCode === 401) {
		errorTitle = "401 - Unauthorized";
		errorMessage = "You need to be logged in to access this page.";
	} else if (typeof abortReason === "string") {
		errorTitle = "Error";
		errorMessage = abortReason;
	} else {
		errorTitle = "Something went wrong";
		errorMessage =
			"We're sorry, but something unexpected happened. Please try again.";
	}

	const errorContent = (
		<div className="my-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
			<div className="max-w-md mx-auto">
				{/* Error icon */}
				<div className="mb-8">
					<div className="w-24 h-24 mx-auto mb-4 rounded-full bg-surface-100 flex items-center justify-center">
						{is404 ? (
							// 404 sad face icon
							<svg
								className="w-12 h-12 text-muted"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<circle cx="12" cy="12" r="10" strokeWidth={1.5} />
								<circle cx="8" cy="9" r="1" fill="currentColor" />
								<circle cx="16" cy="9" r="1" fill="currentColor" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M8 16s1.5-2 4-2 4 2 4 2"
								/>
							</svg>
						) : (
							// General error sad face icon
							<svg
								className="w-12 h-12 text-muted"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<circle cx="12" cy="12" r="10" strokeWidth={1.5} />
								<circle cx="8" cy="9" r="1" fill="currentColor" />
								<circle cx="16" cy="9" r="1" fill="currentColor" />
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M8 16s1.5-2 4-2 4 2 4 2"
								/>
							</svg>
						)}
					</div>
				</div>

				{/* Error title and message */}
				<h1 className="text-3xl font-bold text-foreground mb-4">
					{errorTitle}
				</h1>

				<p className="text-lg text-muted mb-8">{errorMessage}</p>

				{/* Action buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						type="button"
						onClick={() => window.history.back()}
						className="px-6 py-3 bg-surface-100 hover:bg-surface-200 text-foreground rounded-lg transition-colors"
					>
						Go back
					</button>
					<a
						href="/"
						className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors"
					>
						Go to homepage
					</a>
				</div>

				{/* Help links inspired by Supabase 404 */}
				<div className="mt-12 pt-8 border-t border-surface-200">
					<p className="text-sm text-muted mb-4">
						Looking for something specific?
					</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<a
							href="/docs"
							className="text-primary hover:text-primary-600 text-sm underline"
						>
							Documentation
						</a>
						<span className="text-muted">•</span>
						<a
							href="/docs/api"
							className="text-primary hover:text-primary-600 text-sm underline"
						>
							API Reference
						</a>
						<span className="text-muted">•</span>
						<a
							href="/docs/guides"
							className="text-primary hover:text-primary-600 text-sm underline"
						>
							Guides
						</a>
						<span className="text-muted">•</span>
						<a
							href="/docs/errors"
							className="text-primary hover:text-primary-600 text-sm underline"
						>
							Error Codes
						</a>
					</div>
				</div>
			</div>
		</div>
	);

	return errorContent;
}

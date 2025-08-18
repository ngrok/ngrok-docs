import "dotenv/config";
import path from "node:path";
import chalk from "chalk";
import express from "express";
import { renderPage, createDevMiddleware } from "vike/server";

const isProduction = process.env.NODE_ENV === "production";

startServer();

async function startServer() {
	const app = express();
	const root = process.cwd();

	if (isProduction) {
		// In production, serve static files from dist/client/
		app.use(express.static(path.join(root, "dist/client")));
	} else {
		// In development, use Vike's dev middleware
		const { devMiddleware } = await createDevMiddleware({ root });
		app.use(devMiddleware);
	}

	// Vike middleware
	app.get("*", async (req, res, next) => {
		const pageContextInit = {
			urlOriginal: req.originalUrl,
			userAgent: req.get("User-Agent"),
		};
		const pageContext = await renderPage(pageContextInit);
		const { httpResponse } = pageContext;
		if (!httpResponse) {
			return next();
		} else {
			const { body, statusCode, headers } = httpResponse;
			headers.forEach(([name, value]) => res.setHeader(name, value));
			res.status(statusCode).send(body);
		}
	});

	const port = process.env.PORT || 5173;
	app.listen(port);
	console.log(
		chalk.green.bold(`\n- Server running at `) +
			chalk.bold(`http://localhost:${port}\n`),
	);
}

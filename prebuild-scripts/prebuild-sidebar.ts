import fs from "node:fs/promises";
import path from "node:path";
import {
	type ErrorLog,
	type InfoLog,
	logError,
	logInfo,
	logSuccess,
	logWarning,
} from "../pages/utils/errorLogging";
import { getSidebar } from "../pages/utils/sidebarGeneration";

export default async function generateSidebarData() {
	logInfo({
		title: "Sidebar Generation",
		message: "Generating sidebar...",
	});
	try {
		const data = await getSidebar();
		if (!data) {
			throw new Error("Sidebar data is empty.");
		}
		const sidebarData = data.sidebarData;
		if (!sidebarData || sidebarData.length === 0) {
			throw new Error("Processed sidebar data is empty.");
		}
		const processedData = sidebarData.map((item: any) => item.value);
		const errorList: any[] = data.errorList;
		try {
			const outputPath = path.join(
				process.cwd(),
				"/generated/sidebar/autogenSidebarData.json",
			);
			const outputDir = path.dirname(outputPath);
			await fs.mkdir(outputDir, { recursive: true });
			await fs.writeFile(outputPath, JSON.stringify(processedData, null, 2));
			if (sidebarData.some((item) => item === null || item === undefined)) {
				logWarning({
					title: "Sidebar Generation",
					message:
						"Some sidebar items were null or undefined. This will cause errors in the sidebar and top navigation.",
				});
			}
		} catch (error) {
			const errorData = {
				title: "Sidebar Generation Error",
				message: "Failed to write sidebar data to file",
				error,
			};
			logError(errorData);
			errorList.push(errorData);
			throw new Error(`${error}`);
		}
		await writeErrors(errorList);
	} catch (error: unknown) {
		return logError({
			title: "Sidebar Generation Error",
			message: "Failed to write sidebar data to file",
			error,
		});
	}
	logSuccess({
		title: "Sidebar Generation",
		message:
			"Sidebar data successfully written to /generated/sidebar/autogenSidebarData.json",
	});
}

generateSidebarData();

async function writeErrors(errorList: Array<ErrorLog | InfoLog>) {
	if (errorList.length > 0) {
		logError({
			title: "Sidebar Generation",
			message:
				"Some errors occurred during sidebar generation, but the sidebar may have still generated successfully. Check /generated/sidebar/generatedErrors.json for details.",
		});
		const errorPath = path.join(
			process.cwd(),
			"/generated/sidebar/generatedErrors.json",
		);
		const errorDir = path.dirname(errorPath);
		await fs.mkdir(errorDir, { recursive: true });
		await fs.writeFile(errorPath, JSON.stringify(errorList, null, 2));
	} else {
		logSuccess({
			title: "Sidebar Generation",
			message:
				"No errors found. Erasing contents of /generated/sidebar/generatedErrors.json.",
		});
		const emptyErrorPath = path.join(
			process.cwd(),
			"/generated/sidebar/generatedErrors.json",
		);
		const emptyErrorDir = path.dirname(emptyErrorPath);
		await fs.mkdir(emptyErrorDir, { recursive: true });
		await fs.writeFile(emptyErrorPath, JSON.stringify({}, null, 2));
	}
}

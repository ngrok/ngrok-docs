import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		include: ["**/*.test.ts"],
		testTimeout: 10000,
		globals: true,
	},
});

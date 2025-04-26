module.exports = {
	preset: "ts-jest/presets/js-with-ts-esm",
	testEnvironment: "node",
	testMatch: ["**/*.test.ts"],
	extensionsToTreatAsEsm: [".ts"],
	moduleNameMapper: {
		"^(.{1,2}/.*).js$": "$1",
	},
};

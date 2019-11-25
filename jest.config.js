module.exports = {
	preset: 'jest-puppeteer',
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	testPathIgnorePatterns: ['/node_modules/', 'dist'], // 
	setupFilesAfterEnv: ['expect-puppeteer', '<rootDir>/jest.setup.ts'],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest"
	},
	globalSetup: './jest.global-setup.ts', // will be called once before all tests are executed
	globalTeardown: './jest.global-teardown.ts' // will be called once after all tests are executed
};

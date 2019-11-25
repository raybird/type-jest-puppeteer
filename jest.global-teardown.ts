const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalTeardown(globalConfig: any) {
  // Your global teardown
  await teardownPuppeteer(globalConfig)
}
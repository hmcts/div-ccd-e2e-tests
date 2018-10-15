const { getBaseUrl } = require('./helpers/utils');

const testEnv = getBaseUrl();
const baseUrl = `https://${testEnv}`;

exports.config = {
  tests: "tests/**/*.js",
  timeout: 10000,
  output: "./output",
  helpers: {
    Puppeteer: {
      url: baseUrl,
      show: true,
      restart: false,
      keepCookies: false,
      keepBrowserState: false,
      waitForTimeout: 10000,
      waitForAction: 500,
      waitForNavigation: "networkidle0",
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--start-fullscreen',
          `--proxy-server=${process.env.E2E_PROXY_SERVER || ''}`,
          `--proxy-bypass-list=${process.env.E2E_PROXY_BYPASS || ''}`
        ]
      }
    }
  },
  include: {
    I: "./steps_definitions.js",
    LoginPage: "./pages/LoginPage.js",
    CaseListPage: "./pages/CaseListPage.js",
    CaseDetailsPage: "./pages/CaseDetailsPage.js"
  },
  bootstrap: false,
  mocha: {},
  name: "div-ccd-e2e-test"
}
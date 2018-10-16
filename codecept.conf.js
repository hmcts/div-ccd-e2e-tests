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
            '--no-sandbox',
            '--proxy-server=proxyout.reform.hmcts.net:8080'
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
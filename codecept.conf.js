const testConfig = require('./tests/config.js');

exports.config = {
  tests: 'tests/**/createAnUrgencyCaseJourney.test.js',
  timeout: 10000,
  output: process.cwd() + '/functional-output',
  helpers: {
    Puppeteer: {
      url: testConfig.TestUrl,
      show: testConfig.TestShowBrowserWindow,
      waitForNavigation: ['domcontentloaded', 'networkidle0'],
      restart: true,
      keepCookies: false,
      keepBrowserState: false,
      waitForTimeout: 90000,
      waitForAction: 3000,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          // '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--allow-running-insecure-content',
          '--ignore-certificate-errors',
          '--proxy-server=proxyout.reform.hmcts.net:8080',
          '--proxy-bypass-list=*beta*LB.reform.hmcts.net',
          '--window-size=1440,1400'
      ]
      }
  },
  PuppeteerHelper: {
    'require': './helpers/PuppeteerHelper.js'
  },
  Mochawesome: {
      uniqueScreenshotNames: 'true'
  }
},
include: {
    I: './steps_definitions.js'
},
plugins: {
  retryFailedStep: {
    enabled: true
  },
  autoDelay: {
    enabled: testConfig.TestAutoDelayEnabled
  }
},
bootstrap: false,
multiple: {
  'parallel': {
      'chunks': 4
  }
},
mocha: {
  reporterOptions: {
    reportDir: testConfig.TestOutputDir,
    reportName: 'Divorce CCD E2E Tests',
    inlineAssets: true
  }
},
name: 'div-ccd-e2e-test'
};



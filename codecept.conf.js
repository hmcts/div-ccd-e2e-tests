const testConfig = require('./tests/config.js');

exports.config = {
  tests: testConfig.TestPathToRun,
  timeout: 10000,
  output: testConfig.TestOutputDir,
  helpers: {
    Puppeteer: {
      url: testConfig.TestUrl,
      show: testConfig.TestShowBrowserWindow,
      waitForNavigation: ['domcontentloaded'],
      restart: true,
      keepCookies: false,
      keepBrowserState: false,
      smartWait: 5000,
      waitForTimeout: 90000,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--allow-running-insecure-content',
          '--ignore-certificate-errors',
          '--window-size=1440,1400'
        ]
      }
    },
    PuppeteerHelper: {
      'require': './helpers/PuppeteerHelper.js'
    },
    JSWait: {
      require: './helpers/JSWait.js'
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
    },
    screenshotOnFail: {
      enabled: true,
      fullPageScreenshots: 'true'
    }
  },
  bootstrap: false,
  multiple: {
    'parallel': {
      'chunks': 2
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



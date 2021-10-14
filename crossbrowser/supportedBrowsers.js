const LATEST_MAC = 'macOS 10.15';
const LATEST_WINDOWS = 'Windows 10';

const supportedBrowsers = {
  microsoft: {
    edge_win_latest: {
      browserName: 'MicrosoftEdge',
      platformName: LATEST_WINDOWS,
      browserVersion: 'latest',
      'sauce:options': {
        name: 'DIV CCD E2E Tests - XUI: Edge_Win10'
      }
    }
  },
  safari: {
    safari_mac: {
      browserName: 'safari',
      platformName: 'macOS 10.14',
      browserVersion: 'latest',
      'sauce:options': {
        name: 'DIV CCD E2E Tests - XUI: MAC_SAFARI',
        seleniumVersion: '3.141.59',
        screenResolution: '2360x1770'
      }
    }
  },
  chrome: {
    chrome_win_latest: {
      browserName: 'chrome',
      platformName: LATEST_WINDOWS,
      browserVersion: 'latest',
      'sauce:options': {
        name: 'DIV CCD E2E Tests - XUI: WIN_CHROME_LATEST'
      }
    },
    chrome_mac_latest: {
      browserName: 'chrome',
      platformName: LATEST_MAC,
      browserVersion: 'latest',
      'sauce:options': {
        name: 'DIV CCD E2E Tests - XUI: MAC_CHROME_LATEST'
      }
    }
  },
  firefox: {
    firefox_win_latest: {
      browserName: 'firefox',
      platformName: LATEST_WINDOWS,
      browserVersion: 'latest',
      'sauce:options': {
        name: 'DIV CCD E2E Tests - XUI: WIN_FIREFOX_LATEST',
        screenResolution: '2560x1600'
      }
    },
    firefox_mac_latest: {
      browserName: 'firefox',
      platformName: LATEST_MAC,
      browserVersion: 'latest',
      'sauce:options': {
        name: 'DIV CCD E2E Tests - XUI: MAC_FIREFOX_LATEST',
        screenResolution: '2560x1600'
      }
    }
  }
};

module.exports = supportedBrowsers;

exports.config = {
  tests: 'tests/**/*.test.js',
  output: './_output',
  helpers: {
    Playwright: {
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'production smoke tests',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: false,
    },
    screenshotOnFail: {
      enabled: false,
    },
    autoDelay: {
      enabled: true
    },
  },
};

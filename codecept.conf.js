const { getBaseUrl } = require('./helpers/utils');

const testEnv = getBaseUrl();
const baseUrl = `https://${testEnv}`;

exports.config = {
  tests: 'tests/**/*.js',
  timeout: 10000,
  output: process.cwd() + '/functional-output',
  helpers: {
    Puppeteer: {
      url: baseUrl,
      show: false,
      restart: true,
      keepCookies: false,
      keepBrowserState: false,
      waitForTimeout: 90000,
      waitForAction: 3000,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--no-sandbox',
          '--start-fullscreen',
          '--proxy-server=proxyout.reform.hmcts.net:8080'
        ]
      }
    },
    'PuppeteerHelper': {
      'require': './helpers/PuppeteerHelper.js'
    }
  },
  include: {
    I: './steps_definitions.js',
    AboutSolicitorPage: './pages/AboutSolicitorPage.js',
    AboutThePetitionerPage: './pages/AboutThePetitionerPage.js',
    AboutTheRespondentPage: './pages/AboutTheRespondentPage.js',
    CaseDetailsPage: './pages/CaseDetailsPage.js',
    CaseListPage: './pages/CaseListPage.js',
    CaseSubmissionAppCompletePage: './pages/CaseSubmissionAppCompletePage.js',
    CaseSubmissionOrderSummaryPage: './pages/CaseSubmissionOrderSummaryPage.js',
    ClaimForCostsPage: './pages/ClaimForCostsPage.js',
    CreateCasePage: './pages/CreateCasePage.js',
    FinancialOrdersPage: './pages/FinancialOrdersPage.js',
    JurisdictionPage: './pages/JurisdictionPage.js',
    LoginPage: './pages/LoginPage.js',
    MarriageCertificateDetailsPage: './pages/MarriageCertificateDetailsPage.js',
    OtherLegalProceedingsPage: './pages/OtherLegalProceedingsPage.js',
    PaymentCaseSubmissionPage: './pages/PaymentCaseSubmissionPage.js',
    ReasonForTheDivorcePage: './pages/ReasonForTheDivorcePage.js',
    SolCaseCreatedPage: './pages/SolCaseCreatedPage.js',
    SolCreateCheckYourAnswersPage: './pages/SolCreateCheckYourAnswersPage.js',
    StatementOfCaseAdulteryPage: './pages/StatementOfCaseAdulteryPage.js',
    StatementOfCaseAdulterySecPage: './pages/StatementOfCaseAdulterySecPage.js',
    StatementOfTruthAndRecPage: './pages/StatementOfTruthAndRecPage.js',
    UploadMarriageCertificatePage: './pages/UploadMarriageCertificatePage.js',
    SolCreateLanguagePrefPage: './pages/SolCreateLanguagePrefPage.js',
    CaseSubmissionCheckYourAnswersPage: './pages/CaseSubmissionCheckYourAnswersPage.js',
    SolAwaitingPaymentConfirmationPage: './pages/SolAwaitingPaymentConfirmationPage.js',
    CcdCaseCreatedLandingPage: './pages/CcdCaseCreatedLandingPage.js',
    IssuePage: './pages/IssuePage.js',
    IssueCheckYourAnswersPage: './pages/IssueCheckYourAnswersPage.js',
    CcdCaseCreatedPetitionIssuedLandingPage: './pages/CcdCaseCreatedPetitionIssuedLandingPage.js',
    AosPackIssueTestPage: './pages/AosPackIssueTestPage.js',
    IssueAosPackToRespondentCheckYourAnswersPage: './pages/IssueAosPackToRespondentCheckYourAnswersPage.js',
    IssueAosPackToRespondentLandingPage: './pages/IssueAosPackToRespondentLandingPage.js',
    AosStartedPage: './pages/AosStartedPage.js',
    AosStartedCheckYourAnswersPage: './pages/AosStartedCheckYourAnswersPage.js',
    AosReceivedUndefendedMoveToDN: './pages/AosReceivedUndefendedMoveToDN.js',
    SelectEventAndSubmit: './pages/SelectEventAndSubmit.js',
    TransferCaseToADifferentRDCsPage: './pages/TransferCaseToADifferentRDCsPage.js',
    TransferBetweenRDCsPage: './pages/TransferBetweenRDCsPage.js',
    TransferToRDCLandingPage: './pages/TransferToRDCLandingPage.js'
  },
  plugins: {
  retryFailedStep: {
    enabled: true
  },
  autoDelay: {
    enabled: true
  }
},
  bootstrap: false,
  mocha: {
    reporterOptions: {
      reportDir: process.env.E2E_OUTPUT_DIR || './functional-output',
      reportName: 'Divorce CCD E2E Tests',
      inlineAssets: true
    }
  },
  name: 'div-ccd-e2e-test'
};



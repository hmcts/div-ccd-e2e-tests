const { getBaseUrl } = require('./helpers/utils');

const testEnv = getBaseUrl();
const baseUrl = `https://${testEnv}`;

exports.config = {
  tests: "tests/**/*.js",
  timeout: 10000,
  output: process.cwd() + '/functional-output',
  helpers: {
    Puppeteer: {
      url: baseUrl,
      show: true,
      restart: false,
      keepCookies: false,
      keepBrowserState: false,
      waitForTimeout: 10000,
      waitForAction: 1000,
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
    AboutSolicitorPage: "./pages/AboutSolicitorPage.js",
    AboutThePetitionerPage: "./pages/AboutThePetitionerPage.js",
    AboutTheRespondentPage: "./pages/AboutTheRespondentPage.js",
    CaseDetailsPage: "./pages/CaseDetailsPage.js",
    CaseListPage: "./pages/CaseListPage.js",
    CaseSubmissionAppCompletePage: "./pages/CaseSubmissionAppCompletePage.js",
    CaseSubmissionOrderSummaryPage: "./pages/CaseSubmissionOrderSummaryPage.js",
    ClaimForCostsPage: "./pages/ClaimForCostsPage.js",
    CreateCasePage: "./pages/CreateCasePage.js",
    FinancialOrdersPage: "./pages/FinancialOrdersPage.js",
    JurisdictionPage: "./pages/JurisdictionPage.js",
    LoginPage: "./pages/LoginPage.js",
    MarriageCertificateDetailsPage: "./pages/MarriageCertificateDetailsPage.js",
    OtherLegalProceedingsPage: "./pages/OtherLegalProceedingsPage.js",
    PaymentCaseSubmissionPage: "./pages/PaymentCaseSubmissionPage.js",
    ReasonForTheDivorcePage: "./pages/ReasonForTheDivorcePage.js",
    SolCaseCreatedPage: "./pages/SolCaseCreatedPage.js",
    SolCreateCheckYourAnswersPage: "./pages/SolCreateCheckYourAnswersPage.js",
    StatementOfCaseAdulteryPage: "./pages/StatementOfCaseAdulteryPage.js",
    StatementOfCaseAdulterySecPage: "./pages/StatementOfCaseAdulterySecPage.js",
    StatementOfTruthAndRecPage: "./pages/StatementOfTruthAndRecPage.js",
    UploadMarriageCertificatePage: "./pages/UploadMarriageCertificatePage.js",
    CaseSubmissionCheckYourAnswersPage: "./pages/CaseSubmissionCheckYourAnswersPage.js",
    SolAwaitingPaymentConfirmationPage: "./pages/SolAwaitingPaymentConfirmationPage.js",
  },
  bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: process.env.E2E_OUTPUT_DIR || './functional-output',
            reportName: 'Divorce CCD E2E Tests',
            inlineAssets: true
        }
    },
  name: "div-ccd-e2e-test"
}



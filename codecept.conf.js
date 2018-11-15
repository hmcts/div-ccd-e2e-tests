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
      show: false,
      restart: true,
      keepCookies: false,
      keepBrowserState: false,
      waitForTimeout: 25000,
      waitForAction: 2500,
      waitForNavigation: "networkidle0",
      windowSize: '1920x1080',
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
            '--no-sandbox',
            '--start-fullscreen',
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
    CcdCaseCreatedLandingPage:"./pages/CcdCaseCreatedLandingPage.js",
    IssuePage:"./pages/IssuePage.js",
    IssueCheckYourAnswersPage:"./pages/IssueCheckYourAnswersPage.js",
    CcdCaseCreatedPetitionIssuedLandingPage:"./pages/CcdCaseCreatedPetitionIssuedLandingPage.js",
    AosPackIssueTestPage:"./pages/AosPackIssueTestPage.js",
    AosPackIssueTestCheckYourAnswersPage:"./pages/AosPackIssueTestCheckYourAnswersPage.js",
    AosPackIssueTestLandingPage:"./pages/AosPackIssueTestLandingPage.js",
    AosAwaitingTestPage:"./pages/AosAwaitingTestPage.js",
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



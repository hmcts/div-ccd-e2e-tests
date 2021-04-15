const reasonsForDivorce = {
  ADULTERY: 'adultery',
  BEHAVIOUR: 'unreasonable-behaviour',
  DESERTION: 'desertion',
  SEPFIVEYRS: 'separation-5-years',
  SEPTWOYRS: 'separation-2-years',
  ADULTERYDISPLAY: 'Adultery',
  BEHAVIOURDISPLAY: 'Behaviour',
  DESERTIONDISPLAY: 'Desertion',
  SEPFIVEYRSDISPLAY: '5-year separation',
  SEPTWOYRSDISPLAY: '2-year separation (with consent)'
};

const signOut = 'Sign out';

const yesorno = {
  Yes: 'yes',
  No: 'no'
};

const paymentType = {
  FEE_ACCOUNT: 'Fee Account',
  HWF: 'Help with fees'
};

const states = {
  SUBMITTTED: 'Submitted',
  ISSUED: 'Issued',
  REJECTED: 'Rejected',
  DEFENDED_DIVORCE: 'DefendedDivorce',
  AWAITING_SERVICE: 'AwaitingService',
  AOS_AWAITING_SOL: 'AosAwaitingSol',
  AOS_AWAITING: 'AosAwaiting',
  AOS_STARTED: 'AosStarted',
  AWAITING_ANSWER: 'AosSubmittedAwaitingAnswer',
  AWAITING_DN: 'AwaitingDecreeNisi',
  AWAITING_LA: 'AwaitingLegalAdvisorReferral',
  AWAITING_CONSIDERATION: 'AwaitingConsideration',
  AWAITING_PRONOUNCEMENT: 'AwaitingPronouncement',
  AWAITING_DA: 'AwaitingDecreeAbsolute',
  DIVORCE_GRANTED: 'DivorceGranted',
  DN_PRONOUNCED: 'DNPronounced'
};

const stateDisplayName = {
  SOL_AWAIT_PAYMENT_CONFIRM : 'Solicitor - Awaiting Payment Confirmation'
};

const eventDisplayName = {
  UPDATE_LANG: 'Update Language',
  PAYMENT_MADE: 'Payment made',
  HWF_APP_ACCEPTED: 'HWF application accepted',
  ISSUE: 'Issue',
  ISSUE_AOS_TO_RESP: 'Issue AOS pack to respondent',
  AOS_STARTED: 'AOS started',
  AOS_RECVD_UNDEFENDED: 'AOS Received (undefended)',
  REFUND: 'Refund',
  TRANSFER_BETWEEN_RDC: 'Transfer between RDCs',
  TRANSFER_CTSC_TO_RDC: 'Transfer from CTSC to RDC',
  DN_RECEIVED: 'DN application received',
  REFER_TO_LEGAL_ADVSIOR: 'Refer to legal advisor',
  ENTITLEMENT_GRANTED: 'Entitlement granted',
  DN_PRONOUNCED_BY_BULK: 'DN Pronounced by Bulk',
  MAKE_ELIGIBLE_FOR_DA: 'Make eligible for DA (Pet)',
  DA_GRANTED: 'DA Granted'
};

const events = {
  HWF_ACCEPT_AWAIT_DECISION:'hwfApplicationAcceptedfromAwaitingHWFDecision',
  ISSUE_FROM_SUBMITTED:'issueFromSubmitted',
  ISSUE_AOS:'issueAos',
  START_AOS: 'startAos',
  AOS_SUBMITTED_DEFENDED:'aosSubmittedDefended',
  ANSWER_NOT_RECEIVED:'answerNotReceived',
  DN_RECEIVED:'dnReceived',
  REFER_TO_LEGAL_ADVSIOR: 'refertoLegalAdvisor',
  ENTITLEMENT_GRANTED: 'entitlementGranted',
  DN_PRONOUNCED_BY_BULK: 'dnPronouncedBulk',
  DA_GRANTED:'daGranted',
  CO_RESP_ANSWER_RECVD_AOS: 'coRespAnswerReceivedAOS',
  CO_RESP_AOS_RECEIVED_STARTED: 'co-RespAOSReceivedStarted',
  MAKE_ELIGIBLE_FOR_DA: 'MakeEligibleForDA_Petitioner'
};

module.exports = {
  reasonsForDivorce,
  states,
  events,
  signOut,
  paymentType,
  eventDisplayName,
  stateDisplayName,
  yesorno
};

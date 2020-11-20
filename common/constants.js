const reasonsForDivorce = {
    ADULTERY: 'Adultery',
    BEHAVIOUR: 'Behaviour',
    DESERTION: 'Desertion',
    SEPFIVEYRS: 'separation-5-years',
    SEPTWOYRS: 'separation-2-years'
};

const signOut = 'Sign out';

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
    DIVORCE_GRANTED: 'DivorceGranted'
};

const events = {
    UPDATE_LANG: 'Update Language',
    ISSUE: 'Issue',
    REFUND: 'Refund',
    TRANSFER_BETWEEN_RDC: 'Transfer between RDCs',
    TRANSFER_CTSC_TO_RDC: 'Transfer from CTSC to RDC'
};

module.exports = {
    reasonsForDivorce,
    states,
    events,
    signOut
};
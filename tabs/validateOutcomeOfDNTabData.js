const I = actor();
const labels = require('../data/tab-fields/outcomeOfDecreeNisi.json');
const { formatDateToCcdDisplayDate } = require('../helpers/utils');

module.exports = async (verifyContent) => {
    await I.clickTab(labels.name);
    I.see(labels.laDecisionDate);
    I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DNApprovalDate)));
    I.see(labels.clarificationResponse);
    I.see(labels.pronouncementDetails);
    I.see(labels.pronouncementJudge);
    I.see(verifyContent.PronouncementJudge);
    I.see(labels.dnGrantedDate);
    I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DecreeNisiGrantedDate)));
    I.see(labels.caseOnDigitalDNOutcome);
    I.see(verifyContent.DnOutcomeCase);
}

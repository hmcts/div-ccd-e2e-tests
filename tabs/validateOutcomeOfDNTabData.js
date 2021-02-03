const I = actor();
const labels = require('../data/tab-fields/outcomeOfDecreeNisi.json');
const { formatDateToCcdDisplayDate } = require('../helpers/utils');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.laDecisionDate);
  await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DNApprovalDate)));
  await I.see(labels.clarificationResponse);
  await I.see(labels.pronouncementDetails);
  await I.see(labels.pronouncementJudge);
  await I.see(verifyContent.PronouncementJudge);
  await I.see(labels.dnGrantedDate);
  await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DecreeNisiGrantedDate)));
  await I.see(labels.caseOnDigitalDNOutcome);
  await I.see(verifyContent.DnOutcomeCase);
};

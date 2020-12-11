const I = actor();
const labels = require('../data/tab-fields/decreeAbsolute.json');
const { formatDateToCcdDisplayDate } = require('../helpers/utils');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  I.see(labels.respCanApplyDA);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DateRespondentEligibleForDA)));
  I.see(labels.finalDateForDA);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DateCaseNoLongerEligibleForDA)));
}

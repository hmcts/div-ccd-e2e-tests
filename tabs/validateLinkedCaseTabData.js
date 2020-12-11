const I = actor();
const labels = require('../data/tab-fields/linkedCase.json');


module.exports = async () => {
  await I.clickTab(labels.name);
  I.see(labels.previousCaseId);
  I.see('1515-7665-4180-5208');
}

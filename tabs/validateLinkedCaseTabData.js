const I = actor();
const labels = require('../data/tab-fields/linkedCase.json');


module.exports = async () => {
  await I.clickTab(labels.name);
  await I.see(labels.previousCaseId);
  await I.see('1515-7665-4180-5208');
};

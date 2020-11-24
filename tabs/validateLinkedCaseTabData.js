const I = actor();
const labels = require('../data/tab-fields/linkedCase.json');


module.exports = () => {
  I.click(labels.name);
  I.see(labels.previousCaseId);
  I.see('1515-7665-4180-5208');
}

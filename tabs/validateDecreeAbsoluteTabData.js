const I = actor();
const labels = require('../data/tab-fields/decreeAbsolute.json');

module.exports = (verifyContent) => {
  I.click(labels.daAnswers.name);
  I.see(labels.daAnswers.continuewithDA);
}

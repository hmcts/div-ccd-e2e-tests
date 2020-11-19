const I = actor();
const labels = require('../data/tab-fields/decreeAbsolute.json');

module.exports = (verifyContent) => {
  I.click(labels.name);
  I.see(labels.continuewithDA);
}

const I = actor();
const labels = require('../data/tab-fields/documents.json');
const { reasonsForDivorce } = require('../common/constants');

module.exports = (reason, caseId) => {
    I.click(labels.name);
    I.see(labels.documentsUploadedPFEStage);
    I.see(labels.documentsGenerated);
    I.see(labels.d8petitionText + caseId + labels.documentgeneratedExtension);
    if(reasonsForDivorce.ADULTERY == reason) {
      I.see(labels.coRespondentaosinvitationText + caseId + labels.documentgeneratedExtension);
    } else {
      I.see(labels.pfeUploadedDoc);
      I.see(labels.respondentAnswersText);
      I.see(labels.documentsUploadedDNStage);
      I.see(labels.dnUploadedDoc);
    }
  }

const I = actor();
const labels = require('../data/tab-fields/documents.json');
const { reasonsForDivorce } = require('../common/constants');

module.exports = async (reason, caseId) => {
    await I.clickTab(labels.name);
    I.see(labels.documentsUploadedPFEStage);
    I.see(labels.documentsGenerated);
    I.see(labels.d8petitionText + caseId + labels.documentgeneratedExtension);
    if(reasonsForDivorce.ADULTERY == reason) {
      I.see(labels.coRespondentaosinvitationText + caseId + labels.documentgeneratedExtension);
    } 
    I.see(labels.pfeUploadedDoc);
    I.see(labels.respondentAnswersText);
    I.see(labels.documentsUploadedDNStage);
    I.see(labels.dnUploadedDoc);
  }

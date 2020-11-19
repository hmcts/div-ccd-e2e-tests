const I = actor();
const labels = require('../data/tab-fields/documents.json');
const { reasonsForDivorce } = require('../common/constants')

module.exports = (reason, caseId) => {
    I.click(labels.documentsTab.name);
    I.see(labels.documentsTab.documentsUploadedPFEStage);
    I.see(labels.documentsTab.documentsGenerated);
    I.see(labels.documentsTab.d8petitionText + caseId + labels.documentsTab.documentgeneratedExtension);
    if(reasonsForDivorce.ADULTERY == reason) {
      I.see(labels.documentsTab.coRespondentaosinvitationText + caseId + labels.documentsTab.documentgeneratedExtension);
    } else {
      I.see(labels.documentsTab.pfeUploadedDoc);
      I.see(labels.documentsTab.respondentAnswersText);
      I.see(labels.documentsTab.documentsUploadedDNStage);
      I.see(labels.documentsTab.dnUploadedDoc);
    }
  }

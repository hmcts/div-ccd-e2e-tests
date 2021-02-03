const I = actor();
const labels = require('../data/tab-fields/documents.json');
const { reasonsForDivorce } = require('../common/constants');

module.exports = async (reason, caseId) => {
  await I.clickTab(labels.name);
  await I.see(labels.documentsUploadedPFEStage);
  await I.see(labels.documentsGenerated);
  await I.see(labels.d8petitionText + caseId + labels.documentgeneratedExtension);
  if(reasonsForDivorce.ADULTERYDISPLAY === reason) {
    await I.see(labels.coRespondentaosinvitationText + caseId + labels.documentgeneratedExtension);
  } 
  await I.see(labels.pfeUploadedDoc);
  await I.see(labels.respondentAnswersText);
  await I.see(labels.documentsUploadedDNStage);
  await I.see(labels.dnUploadedDoc);
};

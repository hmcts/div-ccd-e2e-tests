const I = actor();
const { firstLetterToCaps } = require('../helpers/utils');
const labels = require('../data/tab-fields/coRespondent.json');

module.exports = (verifyContent) => {
  I.click(labels.coRespondenttab.name);
  I.see(labels.coRespondenttab.coRespondentFName);
  I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyFName);
  I.see(labels.coRespondenttab.coRespondentLName);
  I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyLName);
  I.see(labels.coRespondenttab.coRespondentAddress);
  I.see(verifyContent.D8DerivedReasonForDivorceAdultery3rdAddr);
  I.see(labels.coRespondenttab.coRespondentCommunications);
  I.see(firstLetterToCaps(verifyContent.CoRespConsentToEmail));
  I.see(labels.coRespondenttab.coRespondentReadPetition);
  I.see(firstLetterToCaps(verifyContent.CoRespConfirmReadPetition));
  I.see(labels.coRespondenttab.coRespondentDefendDivorce);
  I.see(firstLetterToCaps(verifyContent.CoRespDefendsDivorce));
  I.see(labels.coRespondenttab.coRespondentAdmitDivorce);
  I.see(firstLetterToCaps(verifyContent.CoRespAdmitAdultery));
  I.see(labels.coRespondenttab.coRespondentAgreeStatementOfTruth);
  I.see(firstLetterToCaps(verifyContent.CoRespStatementOfTruth));
  I.see(labels.coRespondenttab.coRespondentDigitalChannel);
  I.see(firstLetterToCaps(verifyContent.CoRespContactMethodIsDigital));
  I.see(labels.coRespondenttab.coRespondentAosDueDate);
  I.see(labels.coRespondenttab.coRespondentAnswerReceived);
  I.see(verifyContent.ReceivedAnswerFromCoResp);
  I.see(labels.coRespondenttab.coRespondentAnswerReceivedDate);
}

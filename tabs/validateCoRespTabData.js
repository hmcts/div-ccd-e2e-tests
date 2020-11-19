const I = actor();
const { firstLetterToCaps } = require('../helpers/utils');
const labels = require('../data/tab-fields/coRespondent.json');

module.exports = (verifyContent) => {
  I.click(labels.name);
  I.see(labels.coRespondentFName);
  I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyFName);
  I.see(labels.coRespondentLName);
  I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyLName);
  I.see(labels.coRespondentAddress);
  I.see(verifyContent.D8DerivedReasonForDivorceAdultery3rdAddr);
  I.see(labels.coRespondentCommunications);
  I.see(firstLetterToCaps(verifyContent.CoRespConsentToEmail));
  I.see(labels.coRespondentReadPetition);
  I.see(firstLetterToCaps(verifyContent.CoRespConfirmReadPetition));
  I.see(labels.coRespondentDefendDivorce);
  I.see(firstLetterToCaps(verifyContent.CoRespDefendsDivorce));
  I.see(labels.coRespondentAdmitDivorce);
  I.see(firstLetterToCaps(verifyContent.CoRespAdmitAdultery));
  I.see(labels.coRespondentAgreeStatementOfTruth);
  I.see(firstLetterToCaps(verifyContent.CoRespStatementOfTruth));
  I.see(labels.coRespondentDigitalChannel);
  I.see(firstLetterToCaps(verifyContent.CoRespContactMethodIsDigital));
  I.see(labels.coRespondentAosDueDate);
  I.see(labels.coRespondentAnswerReceived);
  I.see(verifyContent.ReceivedAnswerFromCoResp);
  I.see(labels.coRespondentAnswerReceivedDate);
}

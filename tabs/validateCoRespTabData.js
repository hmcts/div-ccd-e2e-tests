const I = actor();
const { firstLetterToCaps } = require('../helpers/utils');
const labels = require('../data/tab-fields/coRespondent.json');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.coRespondentFName);
  await I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyFName);
  await I.see(labels.coRespondentLName);
  await I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyLName);
  await I.see(labels.coRespondentAddress);
  await I.see(verifyContent.D8DerivedReasonForDivorceAdultery3rdAddr);
  await I.see(labels.coRespondentCommunications);
  await I.see(firstLetterToCaps(verifyContent.CoRespConsentToEmail));
  await I.see(labels.coRespondentReadPetition);
  await I.see(firstLetterToCaps(verifyContent.CoRespConfirmReadPetition));
  await I.see(labels.coRespondentDefendDivorce);
  await I.see(firstLetterToCaps(verifyContent.CoRespDefendsDivorce));
  await I.see(labels.coRespondentAdmitDivorce);
  await I.see(firstLetterToCaps(verifyContent.CoRespAdmitAdultery));
  await I.see(labels.coRespondentAgreeStatementOfTruth);
  await I.see(firstLetterToCaps(verifyContent.CoRespStatementOfTruth));
  await I.see(labels.coRespondentDigitalChannel);
  await I.see(firstLetterToCaps(verifyContent.CoRespContactMethodIsDigital));
  await I.see(labels.coRespondentAosDueDate);
  await I.see(labels.coRespondentAnswerReceived);
  await I.see(verifyContent.ReceivedAnswerFromCoResp);
  await I.see(labels.coRespondentAnswerReceivedDate);
};

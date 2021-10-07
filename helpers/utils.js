const { Logger } = require('@hmcts/nodejs-logging');
const requestModule = require('request-promise-native');
const request = requestModule.defaults();

const fs = require('fs');
const testConfig = require('../tests/config.js');

const logger = Logger.getLogger('helpers/utils.js');

const env = testConfig.TestEnv;
const idamBaseUrl = `https://idam-api.${env}.platform.hmcts.net` || testConfig.IdamBaseUrl;
const ccdApiUrl = `http://ccd-data-store-api-${env}.service.core-compute-${env}.internal`;
const redirectUri = `https://div-pfe-${env}.service.core-compute-${env}.internal/authenticated`;

const months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function getUserToken() {
  logger.info('Getting User Token');

  // Setup Details
  const username = testConfig.TestEnvCWUser;
  const password = testConfig.TestEnvCWPassword;
  
  const idamClientSecret = testConfig.TestIdamClientSecret;

  const idamCodePath = `/oauth2/authorize?response_type=code&client_id=divorce&redirect_uri=${redirectUri}`;

  const codeResponse = await request.post({
    uri: idamBaseUrl + idamCodePath,
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch(error => {
    console.log(error);
  });

  const code = JSON.parse(codeResponse).code;

  const idamAuthPath = `/oauth2/token?grant_type=authorization_code&client_id=divorce&client_secret=${idamClientSecret}&redirect_uri=${redirectUri}&code=${code}`;
  const authTokenResponse = await request.post({
    uri: idamBaseUrl + idamAuthPath,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  logger.debug(JSON.parse(authTokenResponse)['access_token']);

  return JSON.parse(authTokenResponse)['access_token'];
}

async function getUserId(authToken) {
  logger.info('Getting User Id');


  const idamDetailsPath = '/details';
  const userDetails = await request.get({
    uri: idamBaseUrl + idamDetailsPath,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });

  logger.debug(JSON.parse(userDetails).id);

  return JSON.parse(userDetails).id;
}

async function getServiceToken() {
  logger.info('Getting Service Token');

  const serviceSecret = testConfig.TestS2SAuthSecret;

  const s2sBaseUrl = `http://rpe-service-auth-provider-${env}.service.core-compute-${env}.internal`;
  const s2sAuthPath = '/lease';
  const oneTimePassword = require('otp')({
    secret: serviceSecret
  }).totp();

  const serviceToken = await request({
    method: 'POST',
    uri: s2sBaseUrl + s2sAuthPath,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      microservice: 'divorce_ccd_submission',
      oneTimePassword
    })
  });

  logger.debug(serviceToken);

  return serviceToken;
}

async function createCaseInCcd(dataLocation = 'data/ccd-basic-data.json') {
  const saveCaseResponse = await createCaseAndFetchResponse(dataLocation).catch(error => {
    console.log(error);
  });
  const caseId = JSON.parse(saveCaseResponse).id;
  logger.info('Created case with id %s', caseId);
  return caseId;
}

async function createCaseAndFetchResponse(dataLocation = 'data/ccd-basic-data.json') {

  const authToken = await getUserToken();

  const userId = await getUserId(authToken);

  const serviceToken = await getServiceToken();

  logger.info('Creating Case');

  const ccdStartCasePath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/event-triggers/hwfCreate/token`;
  const ccdSaveCasePath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases`;

  const startCaseOptions = {
    method: 'GET',
    uri: ccdApiUrl + ccdStartCasePath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    }
  };

  const startCaseResponse = await request(startCaseOptions);

  const eventToken = JSON.parse(startCaseResponse).token;

  var data = fs.readFileSync(dataLocation);
  var saveBody = {
    data: JSON.parse(data),
    event: {
      id: 'hwfCreate',
      summary: 'Creating Case',
      description: 'For CCD E2E Test'
    },
    'event_token': eventToken
  };

  const saveBodyString = updateDocumentUploadedData(JSON.stringify(saveBody));
  console.log('---------- save body string => ', saveBodyString);

  const saveCaseOptions = {
    method: 'POST',
    uri: ccdApiUrl + ccdSaveCasePath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    },
    body: saveBodyString
  };
  const saveCaseResponse =  await request(saveCaseOptions).catch(error => {
    console.log(error);
  });
  console.log('------saveCaseResponse: ', saveCaseResponse);
  return saveCaseResponse;
}

async function updateCaseInCcd(caseId, eventId, dataLocation = 'data/ccd-update-data.json') {
  const authToken = await getUserToken();

  const userId = await getUserId(authToken);

  const serviceToken = await getServiceToken();

  logger.info('Updating case with id %s and event %s', caseId, eventId);

  const ccdStartEventPath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases/${caseId}/event-triggers/${eventId}/token`;
  const ccdSaveEventPath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases/${caseId}/events`;

  const startEventOptions = {
    method: 'GET',
    uri: ccdApiUrl + ccdStartEventPath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    }
  };

  const startEventResponse = await request(startEventOptions);

  const eventToken = JSON.parse(startEventResponse).token;

  var data = fs.readFileSync(dataLocation);
  var saveBody = {
    data: JSON.parse(data),
    event: {
      id: eventId,
      summary: 'Updating Case',
      description: 'For CCD E2E Test'
    },
    'event_token': eventToken
  };

  const saveBodyString = updateDocumentUploadedData(JSON.stringify(saveBody));
  console.log('-------------------------- save body string => ', saveBodyString);

  const saveEventOptions = {
    method: 'POST',
    uri: ccdApiUrl + ccdSaveEventPath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    },
    body: saveBodyString
  };

  const saveEventResponse = await request(saveEventOptions).catch(error => {
    console.log(error);
  });;

  return saveEventResponse;
}
const getBaseUrl = () => {
  return testConfig.TestUrl;
};

function firstLetterToCaps(value){
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

function datechange(numberOfDaysToAdd){
  let currentDateTime = new Date();
  let newDate = new Date();
  newDate = new Date(newDate.setDate(currentDateTime.getDate()+numberOfDaysToAdd));
  let formattedDate = newDate.getDate() + ' ' + months[newDate.getMonth()] + ' ' + newDate.getFullYear();
  return formattedDate;
};

function formatDateToCcdDisplayDate(givenDate = new Date()) {
  let formattedDate = givenDate.getDate() + ' ' + months[givenDate.getMonth()] + ' ' + givenDate.getFullYear();
  return formattedDate;
};

function updateDocumentUploadedData(data){

  console.log('ORIGINAL DATA ====> ', data);
  var documentUploadedData = JSON.parse(fs.readFileSync(`data/documents-uploaded-${env}.json`));
  data = data.replace(/"{{document-uploaded-1}}"/g, JSON.stringify(documentUploadedData.documentUploaded[0]));
  
  console.log('CONVERTED STRING DATA ====> ', data);
  const jsondata = JSON.parse(data);
  console.log('CONVERTED DATA JSON => ', jsondata);
  return data;
}

module.exports = {
  createCaseInCcd,
  createCaseAndFetchResponse,
  updateCaseInCcd,
  getBaseUrl,
  datechange,
  formatDateToCcdDisplayDate,
  firstLetterToCaps
};

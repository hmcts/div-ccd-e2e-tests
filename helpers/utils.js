const request = require('request-promise-native');
const fs = require('fs');

const getSolicitorLoginDetails = () => {
    if (!process.env.CCD_E2E_PASSWORD) {
        throw new Error('You need to set CCD_E2E_EMAIL and CCD_E2E_PASSWORD env variables');
    }
    return {
        username: process.env.CCD_E2E_EMAIL,
        password: process.env.CCD_E2E_PASSWORD
    };
}

async function getUserToken() {
  // Setup Details
  const username = process.env.CCD_CASEWORKER_E2E_EMAIL;
  const password = process.env.CCD_CASEWORKER_E2E_PASSWORD;
  const redirectUri = 'https://div-pfe-aat.service.core-compute-aat.internal/authenticated';
  const idamClientSecret = process.env.IDAM_CLIENT_SECRET;

  const idamBaseUrl = 'https://preprod-idamapi.reform.hmcts.net:3511';

  const idamCodePath = `/oauth2/authorize?response_type=code&client_id=divorce&redirect_uri=${redirectUri}`;

  const codeResponse = await request.post({
    uri: idamBaseUrl + idamCodePath,
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const code = JSON.parse(codeResponse).code;

  const idamAuthPath = `/oauth2/token?grant_type=authorization_code&client_id=divorce&client_secret=${idamClientSecret}&redirect_uri=${redirectUri}&code=${code}`;
  const authTokenResponse = await request.post({
    uri: idamBaseUrl + idamAuthPath,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return JSON.parse(authTokenResponse)['access_token'];
}

async function getUserId(authToken) {
  const idamBaseUrl = 'https://preprod-idamapi.reform.hmcts.net:3511';

  const idamDetailsPath = '/details';
  const userDetails = await request.get({
    uri: idamBaseUrl + idamDetailsPath,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return JSON.parse(userDetails).id;
}

async function getServiceToken() {
  const serviceSecret = process.env.SERVICE_SECRET;

  const s2sBaseUrl = 'http://rpe-service-auth-provider-aat.service.core-compute-aat.internal';
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

  return serviceToken;
}

async function createCaseInCcd(dataLocation = 'data/ccd-basic-data.json') {
  
    const authToken = await getUserToken();

    const userId = await getUserId(authToken);

    const serviceToken = await getServiceToken();

    const ccdApiUrl = 'http://ccd-data-store-api-aat.service.core-compute-aat.internal';
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

    const saveCaseOptions = {
      method: 'POST',
      uri: ccdApiUrl + ccdSaveCasePath,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'ServiceAuthorization': `Bearer ${serviceToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(saveBody)
    };

    const saveCaseResponse = await request(saveCaseOptions);

    const caseId = JSON.parse(saveCaseResponse).id;

    console.log(`Created case with CaseId: ${caseId}`);

    return caseId;
}

async function updateCaseInCcd(caseId, eventId, dataLocation = 'data/ccd-update-data.json') {
  
  const authToken = await getUserToken();

  const userId = await getUserId(authToken);

  const serviceToken = await getServiceToken();

  const ccdApiUrl = 'http://ccd-data-store-api-aat.service.core-compute-aat.internal';
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

  const saveEventOptions = {
    method: 'POST',
    uri: ccdApiUrl + ccdSaveEventPath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(saveBody)
  };

  const saveEventResponse = await request(saveEventOptions);

  return saveEventResponse;
}

const getBaseUrl = () => {
    return 'www-ccd.nonprod.platform.hmcts.net';
}

module.exports = {
    getSolicitorLoginDetails,
    createCaseInCcd,
    updateCaseInCcd,
    getBaseUrl
};
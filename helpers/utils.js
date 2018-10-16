const getTestUserLoginDetails = () => {
    if (!process.env.CCD_E2E_PASSWORD) {
        throw new Error('You need to set CCD_E2E_PASSWORD env variable');
    }
    return {
        username: 'michael.osinloye@hmcts.net' ,
        password: process.env.CCD_E2E_PASSWORD
    };
}

const getBaseUrl = () => {
    return 'www-ccd.nonprod.platform.hmcts.net';
}

module.exports = {
    getTestUserLoginDetails,
    getBaseUrl
};
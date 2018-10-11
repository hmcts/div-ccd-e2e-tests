
'use strict';
// in this file you can append custom step methods to 'I' object

const LoginPage = require('./pages/LoginPage');
const CaseListPage = require('./pages/CaseListPage');
const CaseDetailsPage = require('./pages/CaseDetailsPage');


module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    amOnHomePage: function () {
      this.amOnPage('');
    },

    login: function (email, password) {
      LoginPage.submitLogin(email, password);
    },

    selectACaseFromList: function () {
      CaseListPage.selectCase();
    },

    shouldBeOnCaseDetailsPage: function () {
      CaseDetailsPage.shouldDisplayTabs();
    },

    clickTab: function (list) {
      CaseDetailsPage.clickTab(list);
    },

    shouldBeOnCaseListPage: function () {
      CaseListPage.assertOnPage();
    }
  });
}

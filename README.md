# div-ccd-e2e-tests

Divorce CCD journey tests

## Purpose

This service is to help people to run End2End Journey Tests for Divorce Solicitor Journeys.

## Getting Started

### Prerequisites

Running the application requires the following tools to be installed in your environment:

  * [Node.js](https://nodejs.org/) v7.2.0 or later
  * [yarn](https://yarnpkg.com/)

### Running the application

Install dependencies by executing the following command:

 ```bash
$ yarn install
 ```

### Running the expertui tests against aat

 ```bash
$ yarn test:fullfunctional
 ```

### Running the cross browser tests against aat

 ```bash
$ yarn test:crossbrowser
 ```

## Solicitor case-creator for testing on Preview
To avoid having to manually create new solicitor cases. It creates a generic case with the "Apply for a divorce" and "Case submission" events completed. Steps:

1. Set the following environment variables:
- PROF_USER_EMAIL(AAT solicitor login - can find on vaults)
- PROF_USER_PASSWORD (AAT solicitor password - can find on vaults)
- IDAM_CLIENT_SECRET (can find this on vaults)
- SERVICE_SECRET (can find this on vaults)
- TEST_E2E_URL (ExUI Preview URL e.g. https://xui-div-ccd-definitions-pr-941.service.core-compute-preview.internal/)

2. Run:
 ```bash
$ yarn create-solicitor-case-preview
 ```
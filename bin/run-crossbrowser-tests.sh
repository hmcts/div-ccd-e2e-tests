#!/bin/bash
set -ex

export TESTS_FOR_CROSS_BROWSER='true'
export SMART_WAIT=90000
export WAIT_FOR_TIMEOUT=90000
export E2E_OUTPUT_DIR='./functional-output/xui/crossbrowser'
export RETRY_SCENARIOS=3

if [[ "$BROWSER_GROUP" == "" ]]
then
    EXIT_STATUS=0
    BROWSER_GROUP=chrome yarn test-crossbrowser-e2e || EXIT_STATUS=$?
    BROWSER_GROUP=firefox yarn test-crossbrowser-e2e || EXIT_STATUS=$?
    BROWSER_GROUP=safari yarn test-crossbrowser-e2e || EXIT_STATUS=$?
    BROWSER_GROUP=microsoft yarn test-crossbrowser-e2e || EXIT_STATUS=$?
    echo EXIT_STATUS: $EXIT_STATUS
    exit $EXIT_STATUS
else
    # Compatible with Jenkins parallel crossbrowser pipeline
    yarn test-crossbrowser-e2e
fi

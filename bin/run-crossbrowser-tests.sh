#!/bin/bash
set -ex

export SMART_WAIT=60000
export WAIT_FOR_TIMEOUT=60000
export E2E_OUTPUT_DIR='./functional-output/xui/crossbrowser'
export RETRY_SCENARIOS=0

if [[ "$BROWSER_GROUP" == "" ]]
then
    EXIT_STATUS=0
    BROWSER_GROUP=chrome yarn test-crossbrowser-e2e || EXIT_STATUS=$?
    echo EXIT_STATUS: $EXIT_STATUS
    exit $EXIT_STATUS
else
    # Compatible with Jenkins parallel crossbrowser pipeline
    yarn test-crossbrowser-e2e
fi

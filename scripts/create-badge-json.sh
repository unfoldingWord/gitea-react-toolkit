COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
JSON_FMT='{"message":"%s","label":"%s","schemaVersion":%s}\n'
printf "$JSON_FMT" "$COVERAGE%" "Integration Tests" "1" > "coverage/shields.json"
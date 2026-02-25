#!/bin/bash

# Script to test all traffic policy files in the repository
# Usage: ./test-policies.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 Testing ngrok traffic policies..."
echo ""

# Find all yaml/yml files excluding .github directory
POLICY_FILES=$(find "$(pwd)" -name "*.yaml" -o -name "*.yml" | grep -v "\.github" | sort)

if [ -z "$POLICY_FILES" ]; then
    echo -e "${RED}❌ No policy files found${NC}"
    exit 1
fi

echo "Found $(echo "$POLICY_FILES" | wc -l) policy files:"
echo "$POLICY_FILES"
echo ""

TOTAL_FILES=0
PASSED_FILES=0
FAILED_FILES=0

for policy_file in $POLICY_FILES; do
    TOTAL_FILES=$((TOTAL_FILES + 1))
    
    # Check file contents to determine protocol type for display
    if grep -q "on_http" "$policy_file"; then
        PROTOCOL="http"
    else
        PROTOCOL="tcp"
    fi
    
    COMMAND="ngrok api endpoints create --pooling-enabled --url https://testrun.internal --traffic-policy-file $policy_file --log-format json"
    
    echo -e "${YELLOW}Testing:${NC} $policy_file ${YELLOW}(${PROTOCOL})${NC}"
    echo -e "${YELLOW}Command:${NC} $COMMAND"
    
    # Run ngrok api command to test policy validation
    RESULT=$(mktemp)
    if $COMMAND > "$RESULT" 2>&1; then
        # Extract endpoint ID from the result for cleanup
        ENDPOINT_ID=$(grep -o '"id": "[^"]*"' "$RESULT" | cut -d'"' -f4)
        
        echo -e "${GREEN}✅ PASSED${NC} - $policy_file ($PROTOCOL)"
        PASSED_FILES=$((PASSED_FILES + 1))
        
        # Clean up the created endpoint
        if [ -n "$ENDPOINT_ID" ]; then
            DELETE_COMMAND="ngrok api endpoints delete $ENDPOINT_ID"
            echo -e "${YELLOW}Cleanup:${NC} $DELETE_COMMAND"
            $DELETE_COMMAND > /dev/null 2>&1
        fi
    else
        echo -e "${RED}❌ FAILED${NC} - $policy_file ($PROTOCOL)"
        cat "$RESULT"
        FAILED_FILES=$((FAILED_FILES + 1))
    fi
    
    rm -f "$RESULT"
done

echo ""
echo "=========================================="
echo "TEST SUMMARY"
echo "=========================================="
echo "Total files tested: $TOTAL_FILES"
echo -e "Passed: ${GREEN}$PASSED_FILES${NC}"
echo -e "Failed: ${RED}$FAILED_FILES${NC}"

if [ $FAILED_FILES -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}❌ $FAILED_FILES test(s) failed.${NC}"
    exit 1
fi

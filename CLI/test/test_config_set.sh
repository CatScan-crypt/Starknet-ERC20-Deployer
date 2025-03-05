#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"

# Test setting private-key
"$SCRIPT_DIR/../config_set.sh" -o DEPLOYER_PRIVATE_KEY=test

# Test setting account-address
"$SCRIPT_DIR/../config_set.sh" -o DEPLOYER_ADDRESS=test

# Test setting network
"$SCRIPT_DIR/../config_set.sh" -o NETWORK=test

# Test setting rpc-endpoint-sepolia
"$SCRIPT_DIR/../config_set.sh" -o RPC_ENDPOINT_SEPOLIA=test

# Test setting rpc-endpoint-sepolia
"$SCRIPT_DIR/../config_set.sh" -o RPC_ENDPOINT_MAINNET=test

# Test setting rpc-endpoint-mainnet
"$SCRIPT_DIR/../config_set.sh" -o TOKEN_NAME=test

# Test setting rpc-endpoint-mainnet
"$SCRIPT_DIR/../config_set.sh" -o FIXED_SUPPLY=test

# Test setting rpc-endpoint-mainnet
"$SCRIPT_DIR/../config_set.sh" -o SYMBOL_NAME=test

# Test setting rpc-endpoint-mainnet
"$SCRIPT_DIR/../config_set.sh" -o DECIMALS_LENGTH=test

echo "All config_set.sh tests completed successfully."


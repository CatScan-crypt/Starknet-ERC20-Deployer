#!/usr/bin/env bash


SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"

# Execute config_get.sh commands
"$SCRIPT_DIR/../config_get.sh" -o DEPLOYER_PRIVATE_KEY
"$SCRIPT_DIR/../config_get.sh" -o DEPLOYER_ADDRESS
"$SCRIPT_DIR/../config_get.sh" -o NETWORK
"$SCRIPT_DIR/../config_get.sh" -o RPC_ENDPOINT_SEPOLIA
"$SCRIPT_DIR/../config_get.sh" -o RPC_ENDPOINT_MAINNET
"$SCRIPT_DIR/../config_get.sh" -o TOKEN_NAME
"$SCRIPT_DIR/../config_get.sh" -o SYMBOL_NAME
"$SCRIPT_DIR/../config_get.sh" -o DECIMALS_LENGTH
"$SCRIPT_DIR/../config_get.sh" -o FIXED_SUPPLY
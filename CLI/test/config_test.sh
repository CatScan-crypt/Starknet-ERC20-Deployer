#!/usr/bin/env bash

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"

# Define variables
CONFIG_SCRIPT="$SCRIPT_DIR/../config.sh"

# Array of key-value pairs for setting values
declare -A config_values=(
  ["DEPLOYER_PRIVATE_KEY"]="0x1122334455667788"
  ["DEPLOYER_ADDRESS"]="0x8877665544332211"
  ["NETWORK"]="testnet"
  ["RPC_ENDPOINT_SEPOLIA"]="https://sepolia.example.com"
  ["RPC_ENDPOINT_MAINNET"]="https://mainnet.example.com"
  ["TOKEN_NAME"]="TestToken"
  ["SYMBOL_NAME"]="TTK"
  ["DECIMALS_LENGTH"]="8"
  ["FIXED_SUPPLY"]="1000000"
)

# Flag to track any failures in the get verification
verification_failed=false

# Array to record failed keys
declare -a failed_keys=()

echo "Starting testing..."

echo "testing set"
# Loop through the array to set values
for key in "${!config_values[@]}"; do
  value="${config_values[$key]}"
  echo "Setting $key to $value..."
  "$CONFIG_SCRIPT" -m set -o "$key=$value" 2>/dev/null
done

echo "testing get"
# Loop through the array to get values and verify
for key in "${!config_values[@]}"; do
  expected_value="${config_values[$key]}"
  echo "Getting $key..."

  # Capture the output of the get command
  actual_value="$("$CONFIG_SCRIPT" -m get -o "$key" 2>/dev/null)"

  # Verify if the output matches the expected value
  if [[ "$actual_value" == "$expected_value" ]]; then
    echo "Verification passed: $key = $actual_value"
  else
    echo "Verification failed for $key! Expected: $expected_value, Got: $actual_value"
    # Set the flag to true if any verification fails
    verification_failed=true
    # Add the failed key to the failed_keys array
    failed_keys+=("$key")
  fi
done

# Final verification check
if $verification_failed; then
  echo "One or more verifications failed."
  echo "Failed keys: ${failed_keys[@]}"
else
  echo "All verifications passed!"
fi

echo "Testing complete."

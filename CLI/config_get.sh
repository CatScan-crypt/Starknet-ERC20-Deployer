#!/usr/bin/env bash

# Determine the script's directory
SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"

# Construct the absolute path to the .env files
ENV_FILE="$SCRIPT_DIR/../.env"

# Determine which env file to use
ENV_TO_SOURCE="$ENV_FILE"

# Load environment variables
load_env() {
  if [ -f "$ENV_TO_SOURCE" ]; then
    while IFS= read -r line; do
      # Skip comments and empty lines
      if [[ $line =~ ^(#.*|)$ ]]; then
        continue
      fi

      # Split into key and value
      key=$(echo "$line" | cut -d'=' -f1 | xargs)
      value=$(echo "$line" | cut -d'=' -f2- | xargs)

      # Export the variable
      if [ -n "$key" ]; then
        export "$key=$value"
      fi
    done < "$ENV_TO_SOURCE"
  else
    echo "Error: Environment file '$ENV_TO_SOURCE' not found."
    echo "Creating a new .env file."
    "$SCRIPT_DIR/config_init.sh"
    exit 1
  fi
}

# Load environment variables
load_env

# Parse flags
while getopts "o:" opt; do
  case $opt in
    o)
      get_option="$OPTARG"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done
message="DEPLOYER_PRIVATE_KEY, DEPLOYER_ADDRESS, NETWORK, RPC_ENDPOINT_SEPOLIA, RPC_ENDPOINT_MAINNET, TOKEN_NAME, SYMBOL_NAME, DECIMALS_LENGTH, FIXED_SUPPLY"
helpMessage="$message"

# Check if -o is used
if [ -n "$get_option" ]; then
  case "$get_option" in
    "DEPLOYER_PRIVATE_KEY")
      printf "%s\n" "${DEPLOYER_PRIVATE_KEY}"
      exit 0
      ;;
    "DEPLOYER_ADDRESS")
      printf "%s\n" "${DEPLOYER_ADDRESS}"
      exit 0
      ;;
    "NETWORK")
      printf "%s\n" "${NETWORK}"
      exit 0
      ;;
    "RPC_ENDPOINT_MAINNET")
      printf "%s\n" "${RPC_ENDPOINT_MAINNET}"
      exit 0
      ;;
    "RPC_ENDPOINT_SEPOLIA")
      printf "%s\n" "${RPC_ENDPOINT_SEPOLIA}"
      exit 0
      ;;
    "TOKEN_NAME")
      printf "%s\n" "${TOKEN_NAME}"
      exit 0
      ;; 
    "SYMBOL_NAME")
      printf "%s\n" "${SYMBOL_NAME}"
      exit 0
      ;;
    "DECIMALS_LENGTH")
      printf "%s\n" "${DECIMALS_LENGTH}"
      exit 0
      ;;
    "FIXED_SUPPLY")
      printf "%s\n" "${FIXED_SUPPLY}"
      exit 0
      ;;
    *)
      echo "Invalid get option: $get_option"
      echo "$helpMessage"
      exit 1
      ;;
  esac
else
  echo "Usage: ./config_get.sh -o <option>"
  echo ""
  echo "$helpMessage"
  exit 1
fi

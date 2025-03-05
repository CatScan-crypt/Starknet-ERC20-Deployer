#!/usr/bin/env bash
SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
ENV_FILE="$SCRIPT_DIR/../.env"
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
  fi
}

# Load environment variables
load_env

# Parse flags
while getopts "o:" opt; do
  case $opt in
    o)
      option_and_value="$OPTARG"
      option="${option_and_value%=*}"
      value="${option_and_value#*=}"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      show_help=true
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

message="DEPLOYER_PRIVATE_KEY, DEPLOYER_ADDRESS, NETWORK, RPC_ENDPOINT_SEPOLIA, RPC_ENDPOINT_MAINNET, TOKEN_NAME, SYMBOL_NAME, DECIMALS_LENGTH, FIXED_SUPPLY"
helpMessage="$message"

# Set config option
case "$option" in
  "DEPLOYER_PRIVATE_KEY")
    sed -i "s/^DEPLOYER_PRIVATE_KEY *=.*/DEPLOYER_PRIVATE_KEY = $value/" "$ENV_FILE"
    ;;
  "DEPLOYER_ADDRESS")
    sed -i "s/^DEPLOYER_ADDRESS=.*/DEPLOYER_ADDRESS=$value/" "$ENV_FILE"
    ;;
  "NETWORK")
    sed -i "s/^NETWORK=.*/NETWORK=$value/" "$ENV_FILE"
    ;;
  "RPC_ENDPOINT_SEPOLIA")
    sed -i "s/^RPC_ENDPOINT_SEPOLIA=.*/RPC_ENDPOINT_SEPOLIA=$(echo "$value" | sed 's/\//\\\//g')/" "$ENV_FILE"
    ;;
  "RPC_ENDPOINT_MAINNET")
    sed -i "s/^RPC_ENDPOINT_MAINNET=.*/RPC_ENDPOINT_MAINNET=$(echo "$value" | sed 's/\//\\\//g')/" "$ENV_FILE"
    ;;
  "TOKEN_NAME")
    sed -i "s/^TOKEN_NAME=.*/TOKEN_NAME=$value/" "$ENV_FILE"
    ;;
  "SYMBOL_NAME")
    sed -i "s/^SYMBOL_NAME=.*/SYMBOL_NAME=$value/" "$ENV_FILE"
    ;;
  "DECIMALS_LENGTH")
    sed -i "s/^DECIMALS_LENGTH=.*/DECIMALS_LENGTH=$value/" "$ENV_FILE"
    ;;
  "FIXED_SUPPLY")
    sed -i "s/^FIXED_SUPPLY=.*/FIXED_SUPPLY=$value/" "$ENV_FILE"
    ;;
  *)
    echo "Invalid option: $option"
    echo "Usage: ./config_set.sh -o <option>=value"
    echo "$helpMessage"
    ;;
esac

if [ "$show_help" = true ]; then
  echo ""
  echo "Usage: ./config_set.sh -o <option>=value"
  echo "$helpMessage"
  echo ""
  exit 1
fi

load_env # Reload environment variables after modification

# !/bin/bash

# Check if the starknet-contract-verifier directory exists
if [ ! -d "starknet-contract-verifier" ]; then
  # Clone repository
  git clone https://github.com/NethermindEth/starknet-contract-verifier.git
  cd starknet-contract-verifier || exit

  # Install Rust
  curl https://sh.rustup.rs -sSf | sh -s -- -y
  . "$HOME/.cargo/env"

  # Install dependencies
  sudo apt-get update -y
  sudo apt install build-essential -y
  sudo apt install pkg-config -y
  sudo apt install libssl-dev -y
  sudo apt install jq -y

  # Allow system CFLAGS for OpenSSL
  PKG_CONFIG_ALLOW_SYSTEM_CFLAGS=1 pkg-config --libs --cflags openssl
else
  echo "starknet-contract-verifier already exists. Skipping installation..."
  cd starknet-contract-verifier || exit
fi

ENV_FILE=../.env

ENV_TO_SOURCE="$ENV_FILE"
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
    exit 1
  fi
}

# Load environment variables
load_env

# Read class hash from JSON in working directory
hash=$(jq -r '.classHash' ../classHash.json)

# Default name to class hash if --name flag is not provided
name="$hash"
while [[ $# -gt 0 ]]; do
  case "$1" in
    --name)
      name="$2"
      shift 2
      ;;
    *)
      shift
      ;;
  esac
done

# Run cargo command
cargo run -- --network "${NETWORK}" submit --name "$name" --hash "$hash" --path .. --execute

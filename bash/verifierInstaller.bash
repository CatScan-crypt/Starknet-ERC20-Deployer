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
  apt install pkg-config -y
  sudo apt install libssl-dev -y
  sudo apt install jq -y

  # Allow system CFLAGS for OpenSSL
  PKG_CONFIG_ALLOW_SYSTEM_CFLAGS=1 pkg-config --libs --cflags openssl
else
  echo "starknet-contract-verifier already exists. Skipping installation..."
  cd starknet-contract-verifier || exit
fi

SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"
ParentFolder="$SCRIPT_DIR"/../
ENV_FILE="$ParentFolder/.env"

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
cargo run -- --network sepolia submit --name "$name" --hash "$hash" --path .. --execute

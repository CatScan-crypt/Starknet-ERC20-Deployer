#!/usr/bin/env bash

# Determine the script's directory
SCRIPT_DIR="$(dirname "${BASH_SOURCE[0]}")"

# Construct the absolute path to the .env file
ENV_FILE="$SCRIPT_DIR/../.env"

CONFIG_FILE=".env"
TARGET_ENV_FILE="$ENV_FILE"

# Check if CONFIG_FILE already exists
if [ -f "$TARGET_ENV_FILE" ]; then
  echo "$TARGET_ENV_FILE already exists. Please delete it if you want to re-initialize."
  exit 1
fi

# Copy example.env to CONFIG_FILE
cp "/workspace/Starknet-ERC20-Deployer-OpenHands/example.env" "$TARGET_ENV_FILE"

echo "$TARGET_ENV_FILE file created successfully."
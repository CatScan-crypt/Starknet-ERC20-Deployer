#!/usr/bin/env bash

# Script to unify config_set.sh and config_get.sh

# Function to display usage information
usage() {
  echo "Usage: ./config.sh -m <method> -o <options>"
  echo "  -m <method>:  Specify the method to use (get or set)"
  echo "  -o <options>: Options to pass to the method"
  exit 1
}

# Parse arguments
while getopts "m:o:" opt; do
  case $opt in
    m)
      method="$OPTARG"
      ;;
    o)
      options="$OPTARG"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      usage
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      usage
      ;;
  esac
done

# Check if method is specified
if [ -z "$method" ]; then
  echo "Error: Method must be specified" >&2
  usage
fi

# Execute based on method
case "$method" in
  get)
    ./CLI/config_get.sh -o "$options"
    ;;
  set)
    ./CLI/config_set.sh -o "$options"
    ;;
  *)
    echo "Error: Invalid method: $method" >&2
    usage
    ;;
esac
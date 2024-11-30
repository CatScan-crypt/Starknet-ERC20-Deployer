#!/bin/bash

echo "Starting installation"

# Update the package lists for upgrades and new packages
 sudo apt update


# Clone the asdf repository into the user's home directory under ~/.asdf
git clone https://github.com/asdf-vm/asdf.git "$HOME/.asdf" --branch v0.14.1

if [ -n "$BASH_VERSION" ]; then
    # If Bash shell, append to .bashrc
    echo '. "$HOME/.asdf/asdf.sh"' >> "$HOME/.bashrc"
    . "$HOME/.asdf/asdf.sh"  # Source immediately for the current session
else
    # If neither bash nor zsh, prompt user to install asdf manually
    echo ".bashrc is not detected. Please manually install asdf by following the instructions on https://asdf-vm.com/guide/getting-started.html."
    echo "Press Enter to exit the script."
    read
    exit 1  # Exit the script as asdf is not installed
fi

# Add and install 'scarb' plugin via asdf
asdf plugin add scarb
asdf install scarb 2.8.4
asdf global scarb 2.8.4

# Add and install 'starknet-foundry' plugin via asdf
asdf plugin add starknet-foundry
asdf install starknet-foundry 0.33.0
asdf global starknet-foundry 0.33.0

# Install project dependencies using npm (node package manager)
npm install

# Build the project using the 'scarb' tool
scarb build

# Summary

This file summarizes the repository.

## Overview

This repository provides a tool for easily deploying ERC20 tokens on the Starknet network. It simplifies the process of creating and customizing ERC20 tokens on Starknet, requiring only a few simple steps.

## Usage

To use this tool:

1.  Install the deployer by running the following command in your terminal:

    ```bash
    curl https://raw.githubusercontent.com/CatScan-crypt/Starknet-ERC20-Deployer/refs/heads/main/bash/curlPack.bash | bash
    ```

2.  Deploy a test ERC20 token by running:

    ```bash
    cd Starknet-ERC20-Deployer && npm run firstDeploy
    ```

    You will be prompted for your private key and the address to deploy the token.

3.  Customize the token by editing the `.env` file.

4.  Deploy the customized token by running:

    ```bash
    npm run deploy
    ```
# CLI TODO

- [ ] Implement `deploy` command: Deploy a new ERC20 token with customizable parameters.
    - [ ] Implement `--test` flag: Deploy to the test network.
    - [ ] Implement `--name <token_name>` option: Token name.
    - [ ] Implement `--symbol <token_symbol>` option: Token symbol.
    - [ ] Implement `--initial-supply <initial_supply>` option: Initial token supply.
    - [ ] Implement `--decimals <decimals>` option: Token decimals.
    - [ ] Implement `--private-key <private_key>` option: Wallet private key.
    - [ ] Implement `--account-address <account_address>` option: Wallet account address.
    - [ ] Implement `--network <network>` option: Network to deploy to (e.g., sepolia, mainnet).
    

- [x] Implement `config` command: Manage project configuration.
    - [x] Implement `set` subcommand: Set configuration values.
        - [x] Implement `config set private-key <private_key>`
        - [x] Implement `config set account-address <account_address>`
        - [x] Implement `config set network <network>`
    - [x] Implement `get` subcommand: Get configuration values.
        - [x] Implement `config get private-key`
        - [x] Implement `config get account-address`
        - [x] Implement `config get network`
    - [x] Implement `init` subcommand: Initialize a new project, creating a default `.env` file.

    - [ ] Implement `set-test` subcommand: Set configuration values.
        - [ ] Implement `config set test private-key <private_key>`
        - [ ] Implement `config set test account-address <account_address>`
        - [ ] Implement `config set test network <network>`
    - [ ] Implement `get-test` subcommand: Get configuration values.
        - [ ] Implement `config get test private-key`
        - [ ] Implement `config get test account-address`
        - [ ] Implement `config get test network`
    - [x] Implement `init-test`subcommand: Initialize a new project, creating a default `test.env` file.


- [ ] Implement `verify` command: Verify the deployed contract on Voyager.
    - [ ] Implement `--contract-address <contract_address>` option: The address of the deployed contract.
    - [ ] Implement `--network <network>` option: The network the contract is deployed on.

- [ ] Implement `info` command: Display information about the project or deployed token.
    - [ ] Implement `project` subcommand: Display project information (e.g., version, dependencies).
        - [ ] Display project version
        - [ ] Display project dependencies
    - [ ] Implement `token` subcommand: Display token information (e.g., name, symbol, supply, contract address).
        - [ ] Display token name
        - [ ] Display token symbol
        - [ ] Display token supply
        - [ ] Display token contract address

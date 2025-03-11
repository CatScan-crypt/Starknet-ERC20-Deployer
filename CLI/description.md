# CLI TODO



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

    - [x] Implement `set-test` subcommand: Set configuration values.
    - [x] Implement `get-test` subcommand: Get configuration values.
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

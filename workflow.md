# Project Workflow

## Project Description
A React-based dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## Future Tasks

### UI/UX Enhancements
1. [x] Add no deployed contracts yet in history tab. (DeploymentHistoryTable.jsx)
2. [x] Pop the hover message when the deploy button is pressed when blocked. (DeploymentTable.tsx)
3. [x] Change all px props to % or similar for margins and paddings. (App.css)
4. [x] Replace the deploy button when pending and add "Waiting for user's approval" message instead and "Sending transaction" after - (DeployContractInnerUI.jsx)
5. [x] Add "Transaction result [eg fail\success]" system popup messages. (DeployContractInnerUI.jsx)
6. [x] Add a success\fail message on contract deployment(start with alert and continue with a component). (DeployContractInnerUI.jsx)
7. [x] Make the Tx and CA text in history with copy functionality.
8. [ ] Add error on identical successful deployments.
9. [ ] Add scroll options for the table when over 7 list items.
0. [ ] Change the icons of braavos and argent to starkscan and voyager and change copy icon in history.
1. [ ] Add system alert when copy is inited.
2. [ ] Add delete row in history table.
3. [ ] Add a temp icon untill fetch is finised.

### Wallet Integration
1. [ ] Disable button when sending transaction. (DeployContractInnerUI.jsx)
2. [ ] Add error and block deploy button on special chars in name and symbol and do same on chars and special chars in supply. (DeployContractInnerUI.jsx)
3. [ ] Block the switch chain button in wallet actions when on Braavos and add ! icon with message. (SwitchChain.tsx)
4. [x] Change Wallet Actions text to wallet hash and network and if not connected then it will have a "No Connected Wallet". (walletActions.jsx)
5. [ ] Add an "Add to wallet" column in history(addTokenExample.md)[https://starknetjs.com/docs/6.11.0/guides/walletAccount/].
6. [x] Add wallet icons to Wallet actions dropdown and current network.
7. [ ] Add "Locked Wallet" text to Wallet actions when locked.

### Code Refactoring
1. [ ] Modularize Setting.tsx. (Settings.jsx)
2. [x] Modularize App.css. (App.css)

### Bug Fixes
1. [x] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts-deploymentData function. (useDeploymentEffect.ts)
2. [ ] Fix Deploy route in app.jsx. (App.jsx)
3. [ ] Page refresh returns tab styles to the deploy tab but stays on the same page.
4. [ ] Fix Files in the public directory are served at the root path. Instead of /public/tempIcon.png, use /tempIcon.png.
5. [ ] Investigate Port disconnected, reconnecting... Port connected inject.js:1 loop.

### Security and Warnings
1. [ ] Fix security vulnerabilities. (package.json)
2. [ ] Investigate walletConnect deprecation warning. (starknetkit.tsx)

### Feature Development
1. [ ] Add contract methods to Contract Actions tab. (ContractActions.jsx)
2. [ ] Research faucet requests to add test funds button.

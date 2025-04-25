# Project Workflow

## Project Description
A React-based dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## Future Tasks

### UI/UX Enhancements
1. [ ] Add no deployed contracts yet in history tab. (DeploymentHistoryTable.jsx)
2. [ ] Pop the hover message when the deploy button is pressed when blocked (solution: https://stackoverflow.com/questions/69038218/make-disabled-button-trigger-onclick-event-in-react). (DeployContractInnerUI.jsx)
3. [ ] Change all px props to % or similar for margins and paddings. (App.css)
4. [ ] Replace the deploy button and add "Waiting for user's approval" message instead and "Sending transaction" after - (DeployContractInnerUI.jsx)
5. [ ] Add "Transaction result [eg fail\success]" popup messages. (DeployContractInnerUI.jsx)

### Code Refactoring
1. [ ] Modularize Setting.tsx. (Settings.jsx)
2. [ ] Modularize App.css. (App.css)

### Feature Development
1. [ ] Add contract methods to Contract Actions tab. (ContractActions.jsx)
2. [ ] Add a success\fail message on contract deployment(start with alert and continue with a component). (DeployContractInnerUI.jsx)

### Bug Fixes
1. [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts-deploymentData function. (useDeploymentEffect.ts)
2. [ ] Fix Deploy route in app.jsx. (App.jsx)

### Security and Warnings
1. [ ] Fix security vulnerabilities. (package.json)
2. [ ] Investigate walletConnect deprecation warning. (starknetkit.tsx)

### Wallet Integration
1. [ ] Disable button when sending transaction. (DeployContractInnerUI.jsx)
2. [ ] Add error and block deploy button on special chars in name and symbol and do same on chars and special chars in supply. (DeployContractInnerUI.jsx)
3. [ ] Block the switch chain button in wallet actions when on Braavos and add ! icon with message. (SwitchChain.tsx)
4. [ ] Change Wallet Actions text to wallet hash and network and if not connect then it will have a "No Connected Wallet". (walletActions.jsx)

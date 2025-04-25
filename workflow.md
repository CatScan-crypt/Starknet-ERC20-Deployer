# Project Workflow

## Project Description
A React-based dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## Future Tasks

### UI/UX Enhancements
1. [x] Add a temp logo in header.
2. [x] Clear gap on the right of the page.
3. [x] Add a div to nest a curved asset component and wrap the logo and text in it.
4. [ ] Add no deployed contracts yet in history tab.
5. [ ] Pop the hover message when the deploy button is pressed when blocked (solution: https://stackoverflow.com/questions/69038218/make-disabled-button-trigger-onclick-event-in-react).
6. [ ] Change all px props to % or similar for margins and paddings.
7. [ ] Replace the deploy button and add "Waiting for wallet user's approval" message instead and "Sending transaction".
8. [ ] Add "Transaction result [eg fail\success]" popup messages.

### Code Refactoring
1. [ ] Modularize Setting.tsx.
2. [ ] Modularize App.css.

### Feature Development
1. [x] Create a new "Contract Actions" tab.
2. [x] Add in history table links and logos for contract address and TxH columns.
3. [ ] Add contract methods to Contract Actions tab.
4. [ ] Add a success\fail message on contract deployment(start with alert and continue with a component).

### Bug Fixes
1. [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts-deploymentData function.
2. [ ] Fix Deploy route in app.jsx.

### Security and Warnings
1. [ ] Fix security vulnerabilities.
2. [ ] Investigate walletConnect deprecation warning.

### Wallet Integration
1. [x] Wallet auto open on tab redirect [happend only on chrome, tested only with Braavos so test with ArgentX](add to known issue).
2. [ ] Disable button when sending transaction.
3. [ ] Add error and block deploy button on special chars in name and symbol and do same on chars and special chars in supply.
4. [ ] Block the switch chain button in wallet actions when on Braavos and add ! icon with message.
5. [ ] Change Wallet Actions text to wallet hash and network and if not connect then it will have a "No Connected Wallet".

# Project Workflow

## Project Description
A React-based dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## Future Tasks

### UI/UX Enhancements
1. [ ] Add error on identical successful deployments.
2. [x] Add scroll option for the table when over 7 list items.
3. [x] Change the icons of braavos and argent to starkscan and voyager and change copy icon in history.
4. [ ] Add system alert when copy is inited.
5. [ ] Add delete row in history table.
6. [ ] Add a temp icon untill fetch is finised.
7. [x] Add switch for: show all, show only failed, show only successful in history table.
8. [x] Add switch in history for show sepolia, mainnet or both.

### Wallet Integration
1. [ ] Disable button when sending transaction. (DeployContractInnerUI.jsx)
2. [ ] Add error and block deploy button on special chars in name and symbol and do same on chars and special chars in supply. (DeployContractInnerUI.jsx)
3. [ ] Block the switch chain button in wallet actions when on Braavos and add ! icon with message. (SwitchChain.tsx)
4. [ ] Add an "Add to Wallet" column in history(addTokenExample.md)[https://starknetjs.com/docs/6.11.0/guides/walletAccount/].
5. [ ] Add "Locked Wallet" text to Wallet actions when disconnect button is true and switch network button is false.

### Code Refactoring
1. [ ] Modularize Setting.tsx. (Settings.jsx)

### Bug Fixes
1. [ ] Fix Deploy route in app.jsx. (App.jsx)
2. [ ] Page refresh returns tab styles to the deploy tab but stays on the same page.
3. [ ] Fix Files in the public directory are served at the root path. Instead of /public/tempIcon.png, use /tempIcon.png.
4. [ ] Investigate Port disconnected, reconnecting... Port connected inject.js:1 loop.
5. [ ] Deployed on Chain column shows current network instead of deployed on network data.

### Security and Warnings
1. [ ] Fix security vulnerabilities. (package.json)
2. [ ] Investigate walletConnect deprecation warning. (starknetkit.tsx)

### Feature Development
1. [ ] Add contract methods to Contract Actions tab. (ContractActions.jsx)
2. [ ] Research faucet requests to add test funds button.
2. [ ] Add events analytics.

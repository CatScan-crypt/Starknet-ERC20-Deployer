# Project Workflow

## Project Description
A React-starknet dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## Future Tasks

### UI/UX Enhancements
1. [ ] Add error on identical successful deployments.
2. [ ] Add a temp icon untill fetch is finised.
3. [ ] Remove icons and CA & TxH text, from failed deployments in history table(copy and explorer links).
4. [ ] Change history table's direction.
5. [ ] In settings, modify the clear data button's text to be with the current chain.

### Wallet Integration
1. [ ] Disable button when sending transaction. (DeployContractInnerUI.jsx)
2. [ ] Add error and block deploy button on special chars and not English in name and symbol and do same on chars and special chars in supply. (DeployContractInnerUI.jsx)
3. [ ] Block the switch chain button in wallet actions when on Braavos and add ! icon with message. (SwitchChain.tsx)
4. [ ] Add an "Add to Wallet" column in history(addTokenExample.md)[https://starknetjs.com/docs/6.11.0/guides/walletAccount/].
5. [ ] Add "Locked Wallet" text to Wallet actions when disconnect button is true and switch network button is false.

### Code Refactoring
1. [x] Modularize Setting.tsx. (Settings.jsx)

### Bug Fixes and Updates
1. [ ] Fix 'Deploy' route in app.jsx. (App.jsx)
2. [ ] Page refresh returns tab styles to the deploy tab but stays on the same page.
3. [ ] Fix "Files in the public directory are served at the root path. Instead of /public/tempIcon.png, use /tempIcon.png".
4. [ ] Investigate Port disconnected, reconnecting... Port connected inject.js:1 loop.
5. [ ] No 404 on empty routes.
6. [ ] Update README.MD
7. [ ] Switching in history to chain with no deployment, results in no action.
8. [ ] Fix TypeError: onSelect is not a function at handleSelect (dropdown.tsx:17:5)

### Security and Warnings
1. [ ] Fix security vulnerabilities. (package.json)
2. [ ] Investigate walletConnect deprecation warning. (starknetkit.tsx)

### Feature Development
1. [ ] Add contract methods to Contract Actions tab. (ContractActions.jsx)
2. [ ] Research faucet requests to add test funds button.
2. [ ] Add handmade or Vercel events analytics.
5. [ ] Add AirDrop functionalities.
6. [ ] Add a transfer tax option in contract and deployment table.

# Project Workflow

## Project Description
A React-starknet dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## Future Tasks

### UI/UX Enhancements
1. [ ] Add error on identical successful deployments. (`DeployContractInnerUI.jsx`)
2. [x] Add a temp pending text untill fetch is finised. (`DeploymentHistoryTable.jsx`)
3. [x] Remove icons and CA & TxH text, from failed deployments in history table(copy and explorer links). (`DeploymentHistoryTable.jsx`)
4. [x] Change history table's direction. (`DeploymentHistoryTable.jsx`)
5. [ ] In settings, modify the clear data button's text to be with the current chain. (`Settings.jsx`)
6. [ ] Remove icons and shortenAddress on pending CA.

### Wallet Integration
1. [ ] Disable button when sending transaction. (`DeployContractInnerUI.jsx`)
2. [ ] Add error and block deploy button on special chars and not English in name and symbol and do same on chars and special chars in supply. (`DeployContractInnerUI.jsx`)
3. [ ] Block the switch chain button in wallet actions when on Braavos and add ! icon with message. (`SwitchChain.tsx`)
4. [ ] Add an "Add to Wallet" column in history. (`DeploymentHistoryTable.jsx`, see `addTokenExample.md`)
5. [ ] Add "Locked Wallet" text to Wallet actions when disconnect button is true and switch network button is false. (`walletActions.jsx`)

### Code Refactoring
1. [x] Modularize Setting.tsx. (`Settings.jsx`)

### Bug Fixes and Updates
1. [ ] Fix 'Deploy' route in app.jsx. (`App.jsx`)
2. [ ] Page refresh returns tab styles to the deploy tab but stays on the same page. (`App.jsx`)
3. [ ] Fix "Files in the public directory are served at the root path. Instead of /public/tempIcon.png, use /tempIcon.png". (`DeploymentHistoryTable.jsx`)
4. [ ] Investigate Port disconnected, reconnecting... Port connected inject.js:1 loop. (`starknetkit.tsx` )
5. [ ] No 404 on empty routes. (`App.jsx`)
6. [ ] Update README.MD (`README.md`)
7. [ ] Fix TypeError: onSelect is not a function at handleSelect. (`dropdown.tsx`)
8. [ ] Empty input field at Initial supply in deployment table results in site breakage.

### Security and Warnings
1. [ ] Fix security vulnerabilities. (`package.json`)
2. [ ] Investigate walletConnect deprecation warning. (`starknetkit.tsx`)

### Feature Development
1. [ ] Add contract methods to Contract Actions tab. (`ContractActions.jsx`)
2. [ ] Research faucet requests to add test funds button. (New file or integration point TBD)
3. [ ] Add handmade or Vercel events analytics. (`vercel.json` or new analytics integration)
4. [ ] Add AirDrop functionalities. (New file or integration point TBD)
5. [ ] Add a transfer tax option in contract and deployment table. (`DeployContractInnerUI.jsx`, `DeploymentHistoryTable.jsx`)
6. [ ] Find a feature for users to share like deployed tokens.

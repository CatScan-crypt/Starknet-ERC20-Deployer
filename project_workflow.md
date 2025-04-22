# Project Workflow

## Project Description
This project is a React-based dApp for deploying ERC20 tokens on the Starknet network.
It provides a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## File System
```
eslint.config.js
index.html
LICENSE
package.json
README.md
vite.config.js
lib/
	erc20_class_abi.ts
public/
	starkscan.png
	vite.svg
	voyager.png
src/
	App.css
	App.jsx
	index.css
	main.jsx
	assets/
		react.svg
	components/
		ConnectWallet.jsx
		starknet-provider.tsx
		SwitchChain.tsx
	tabs/
		deploy/
			Deploy.jsx
			components/
				DeployContractInner.tsx
				DeployContractInnerUI.jsx
				DeploymentTable.tsx
			hooks/
				useDeploymentEffect.ts
		history/
			History.jsx
			components/
				DeploymentHistoryTable.jsx
		settings/
			Settings.jsx
	utils/
		getCallData.js
		tests/
			boilerplate_erc20_contract.compiled_contract_class.json
			boilerplate_erc20_contract.contract_class.json
			test.tsx
```

## Future Tasks

1. [x] Block deployment request when fields are not filled.
2. [x] Fix 404 on F5/refresh and on direct URL access when tab path is included in the URL.
3. [x] Add clear browser data to settings page.
4. [ ] Upgrade wallet connection with starkit: https://github.com/apibara/starknet-react/blob/main/docs/components/demo/starknetkit.tsx
5. [x] Add Vercel's analytics.
6. [x] Remove field's text for name and symbol and add placeholders(also placeholder for supply but without deleting default number).
7. [ ] Add "Waiting for confirmation" popup and "Sending transaction" popup and "Transaction result [eg fail\success]" popup messages.
8. [ ] Nest the Deployment in a floating frame.
9. [ ] Fix Auto connected wallet open on tab move(could be fixed when upgraded to starkit in task #1).
10. [ ] Create a new "Write" tab and plan a contract write function methods to it(add future task to add custom contract after).
11. [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts - deploymentData function.
12. [ ] Disable button when sending transaction.
13. [ ] Add export history data to settings tab.
14. [ ] Find and mitigate the issue on "WalletConnet" browser's console warning(might be solved with task #1).
15. [ ] Pop the hover message when blocked Deploy button is pressed.
16. [ ] Block button when wallet isn't connected.

## Current Issue.

### Task 4: Upgrade wallet connection with starkit

### Problem Description

The current wallet connection implementation needs to be upgraded to use Starkit for improved functionality and compatibility. Starkit provides a more robust and modern approach to wallet integration with Starknet dApps.

### Proposed Solution

Replace the existing wallet connection logic with Starkit, following the guidelines and examples provided in the Starknet-React documentation.
Starknetkit: https://github.com/apibara/starknet-react/blob/main/docs/components/demo/starknetkit.tsx

### Implementation Details

1. **Update ConnectWallet Component:** Modify the `ConnectWallet.jsx` component to use Starkit for wallet connection. This includes updating the component to use the `useStarknet` hook and related Starkit components.
2. **Remove Legacy Code:** Remove any legacy wallet connection code that is no longer needed.

### Steps to Update ConnectWallet Component

1. **Install Starkit Dependencies:** Ensure that the required dependencies for Starkit are installed. Use the following command:
   ```bash
   npm install @starknet-react/core
   ```

2. **Refactor ConnectWallet Component:**
   - Replace the existing wallet connection logic in `ConnectWallet.jsx` with the `useStarknet` hook and related Starkit components.
   - Update the UI to reflect the new wallet connection flow.

3. **Remove Legacy Code:**
   - Identify and remove any unused imports and legacy wallet connection logic.

4. **Test the Component:**
   - Verify that the wallet connection works as expected.
   - Test the disconnect functionality and ensure compatibility with different wallets.

5. **Update Documentation:**
   - Update the `README.md` or any relevant documentation to reflect the new wallet connection implementation.

6. **Commit Changes:**
   - Commit the updated `ConnectWallet.jsx` file and any other related changes to the repository.


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
		erc20_class_abi.ts
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

1.  Block deployment request when fields are not filled.
2.  Fix 404 on F5/refresh and on direct URL access when tab path is included in the URL.
3.  Add clear browser data to settings page.
4.  Upgrade wallet connection with starkit: https://github.com/apibara/starknet-react/blob/main/docs/components/demo/starknetkit.tsx
5.  Add Vercel's analytics.
6.  Remove fields text and add placeholders.
7.  Add sending transaction popup.
8.  Nest the Deployment in a floating frame.
9. Fix Auto connected wallet open on tab move(could be fixed when upgraded to starkit in task #5).
10. Create a new "Write" tab and plan a contract write function methods to it(add future task to add custom contract after).
11. Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts - deploymentData function. 
12. Disable button when sending transaction.
13. Add export history data to settings tab.
14. Find and mitigate the issue on "WalletConnet" browser's console warning(might be solved with task #5).

## Current Task

### Possible Solutions

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
4. [x] Upgrade wallet connection with starkit: https://github.com/apibara/starknet-react/blob/main/docs/components/demo/starknetkit.tsx
5. [x] Add Vercel's analytics.
6. [x] Remove field's text for name and symbol and add placeholders(also placeholder for supply but without deleting default number).
7. [ ] Add "Waiting for confirmation" popup and "Sending transaction" popup and "Transaction result [eg fail\success]" popup messages.
8. [ ] Wrap the Deployment component in a floating frame to enhance its visual presentation and accessibility.
9. [ ] Fix connected wallet auto open on tab redirect(could be fixed when upgraded to starkit in task #1).
10. [ ] Create a new "Contract Actions" tab and write under Current Task a contract actions functions methods to it(add future task to add custom contract after).
11. [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts - deploymentData function.
12. [ ] Disable button when sending transaction.
13. [x] Add export history data to settings tab.
14. [x] Find and mitigate the issue on "WalletConnet" browser's console warning(might be solved with task #1).
15. [ ] Pop the hover message when blocked Deploy button is pressed.
16. [ ] Block Deploy button when the wallet isn't connected.
17. [ ] In Settings change the exports to a popup export options csv\json
18. [ ] Wrap wallet connectors in a dropdown component.
19. [ ] Remove redundent wallet connection buttons and text(return message).
20. [ ] Add error on special chars in name and symbol and add error on chars and special chars in supply.
 
## Current Task

### Task 10: Create a new "Contract Actions" tab

1. Add functionality to interact with deployed contracts, such as executing specific contract methods.
2. Write a future task to allow users to add custom contracts to this tab.

### Steps for Task #10 - Step #1

1. Identify the active methods for contract actions: `mint`, `burn`, `renounce ownership`, and `transfer ownership`.
2. Create a UI in `ContractActions.jsx` to allow users to select and execute these methods.
3. Implement logic to call the respective contract methods using Starknet.js or a similar library.
4. Display appropriate feedback or results to the user after executing a method.




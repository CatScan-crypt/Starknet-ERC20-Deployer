# Project Workflow

## Project Description
A React-based dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.

## File System
```
eslint.config.js
index.html
LICENSE
package.json
project_workflow.md
README.md
vercel.json
vite.config.js
lib/
	erc20_class_abi.ts
public/
	starkscan.png
	tempIcon.png
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
		starknetkit.tsx
		SwitchChain.tsx
		starknetkit/
			index.ts
			starknetkit-connectors.ts
		ui/
			button.tsx
			dropdown.css
			dropdown.tsx
			utils.ts
	tabs/
		contract-actions/
			ContractActions.jsx
		deploy/
			Deploy.jsx
			components/
				DeployContractInner.tsx
				DeployContractInnerUI.jsx
				DeploymentTable.tsx
			hooks/
				useDeploymentEffect.ts
				useDeploymentState.ts
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

1.  [x] Block deployment request when fields are not filled.
2.  [x] Fix 404 on F5/refresh and on direct URL access when tab path is included in the URL.
3.  [x] Add clear browser data to settings page.
4.  [x] Upgrade wallet connection with starkit: https://github.com/apibara/starknet-react/blob/main/docs/components/demo/starknetkit.tsx
5.  [x] Add Vercel's analytics.
6.  [x] Remove field's text for name and symbol and add placeholders(also placeholder for supply but without deleting default number).
7.  [x] Add export history data to settings tab.
8.  [x] Find and mitigate the issue on "WalletConnet" browser's console warning(might be solved with task #1).
9.  [x] Create a a dropdown window component. Wrap wallet connectors in a dropdown component.
10. [x] Add initiation logic to the deploy button when wallet isn't connected: if deploy clicked but wallet not connected it will pop the starknetkit component.
11. [x] Add Header and Footer.
12. [x] Hide Switch Chain untill connected.
13. [x] Add current chain text to Switch Chain button.
14. [x] Remove redundent wallet connection buttons and text(return message).
15. [x] Add action to close drop down on clicking outside the component.
16. [x] Add social logos and links to footer(GitHub - LinkedIn - Telegram).
17. [x] Add styles to Wallet Actions button(anchor right, text color).
18. [ ] Add "Waiting for wallet user's approval" popup and "Sending transaction" popup and "Transaction result [eg fail\success]" popup messages.
19. [ ] Wrap the Deployment component in a floating frame to enhance its visual presentation and accessibility.
20. [ ] Wallet auto open on tab redirect [happend only on chrome, tested only with Braavos so test with ArgentX].
21. [ ] Create a new "Contract Actions" tab and write under Current Task a contract actions functions methods to it(add future task to add custom contract after).
22. [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts - deploymentData function.
23. [ ] Disable button when sending transaction.
24. [ ] Pop the hover message when blocked Deploy button is pressed.
25. [ ] In Settings change the exports to an options dropdown menu (csv\json).
26. [ ] Add error and block deploy button on special chars in name and symbol and do same on chars and special chars in supply.
27. [ ] Block switch chain when on Braavos and add ! icon with message.
28. [ ] Add txt option to export dropdown in Settings.
29. [ ] Add a temp logo.
30. [ ] Remove redundent list space when the menu isn't occupied in Wallet Actions dropdown.
31. [ ] Add in history table a deployed on chain column.
32. [ ] Add OnlyDust logo.



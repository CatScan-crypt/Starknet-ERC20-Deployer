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

- [x] Block deployment request when fields are not filled.
- [ ] Fix 404 on F5/refresh and on direct URL access when tab path is included in the URL.
- [ ] Add clear browser data to settings page.
- [ ] Upgrade wallet connection with starkit: https://github.com/apibara/starknet-react/blob/main/docs/components/demo/starknetkit.tsx
- [ ] Add Vercel's analytics.
- [ ] Remove fields text and add placeholders.
- [ ] Add sending transaction popup.
- [ ] Nest the Deployment in a floating frame.
- [ ] Fix Auto connected wallet open on tab move(could be fixed when upgraded to starkit in task #5).
- [ ] Create a new "Write" tab and plan a contract write function methods to it(add future task to add custom contract after).
- [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts - deploymentData function.
- [ ] Disable button when sending transaction.
- [ ] Add export history data to settings tab.
- [ ] Find and mitigate the issue on "WalletConnet" browser's console warning(might be solved with task #5).

## Current Task

### Task 2: Fix 404 on F5/refresh and on direct URL access when tab path is included in the URL

### Problem Description
When navigating directly to a URL containing a tab path (e.g., `/deploy` or `/history`) or refreshing the page while on such a path, the server returns a 404 error. This happens because the client-side routing handles these paths, but the server is not configured to serve the main `index.html` for these routes, which is necessary for the React Router to take over.

### Possible Solutions
1.  **Configure Server Fallback**: Configure the development server (Vite) and the production server (e.g., Vercel, Netlify) to serve `index.html` for all non-asset requests. This allows the client-side router to handle the path.
2.  **Use Hash Router**: Switch from `BrowserRouter` to `HashRouter` in React Router. This uses the URL hash (`#`) for routing (e.g., `/#/deploy`), which doesn't require server-side configuration as the part after the hash isn't sent to the server.
3.  **Server-Side Rendering (SSR)**: Implement SSR, although this is likely overkill for this project and adds significant complexity.

### Proposed Solution
We will implement **Solution 1: Configure Server Fallback**. This is the standard approach for single-page applications (SPAs) using `BrowserRouter`. We need to ensure both the Vite development server and the deployment platform are correctly configured.

### Steps to Complete
1.  **Verify Vite Configuration**: Check `vite.config.js` to ensure the development server is configured correctly for SPA fallback. Vite usually handles this by default, but it's good to confirm.
2.  **Configure Deployment Platform**: If deploying to a platform like Vercel or Netlify, add the necessary configuration (e.g., a `vercel.json` or `netlify.toml` file) to handle rewrites, ensuring all paths serve `index.html`.
3.  **Test**: Test direct navigation and page refreshes on different tab routes both locally and in the deployed environment (if applicable).

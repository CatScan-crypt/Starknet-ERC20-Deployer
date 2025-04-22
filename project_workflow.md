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

### Proposed Solution
The issue you're encountering—receiving a 404 error when navigating directly to a URL containing a tab path (e.g., `/deploy` or `/history`) or refreshing the page while on such a path—is a common problem in single-page applications (SPAs) using React Router. This happens because the server doesn't know how to handle routes defined client-side by React Router.

### ✅ Solution: Configure Your Server to Handle Client-Side Routing

To resolve this, you need to ensure that your server serves the `index.html` file for all routes, allowing React Router to handle the routing on the client side. Here's how you can do this depending on your hosting environment:

#### 1. **For Apache Servers**

Create or update a `.htaccess` file in your project's root directory with the following content:


```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This configuration ensures that all requests are redirected to `index.html`, allowing React Router to handle the routing.

#### 2. **For Vercel**

Create or update a `vercel.json` file in your project's root directory with the following content:


```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration ensures that Vercel redirects all requests to `index.html`, allowing React Router to handle the routing.


#### 3. **For Other Hosting Environments**

If you're using a different hosting environment, you'll need to configure it to serve `index.html` for all routes. This typically involves setting up URL rewrites or redirects. Consult your hosting provider's documentation for specific instructions.

### 🔧 Additional Tips

- **Ensure Correct Base Path**: If your application is served from a subdirectory (e.g., `https://example.com/my-app/`), make sure to set the `basename` prop in your `BrowserRouter` component

```jsx
  <BrowserRouter basename="/my-app">
    {/* your routes */}
  </BrowserRouter>
```

- **Check for Server-Side Routing Conflicts**: Ensure that your server is not conflicting with client-side routing For example, if you have a server route that matches a client-side route, it may intercept the request before React Router can handle it

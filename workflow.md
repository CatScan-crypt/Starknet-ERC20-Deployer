# Project Workflow

## Project Description
A React-based dApp for deploying ERC20 tokens on the Starknet network.
Providing a user-friendly interface for interacting with the Starknet blockchain.
Users can deploy, manage, and track their ERC20 token deployments.


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
18. [x] In Settings change the exports to an options dropdown menu (csv\json).
19. [x] Add txt option to export dropdown in Settings.
20. [x] Remove redundent list space when the menu isn't occupied in Wallet Actions dropdown.
21. [x] Add in history table a deployed on chain column.
22. [x] Add OnlyDust logo.
23. [ ] Add "Waiting for wallet user's approval" popup and "Sending transaction" popup and "Transaction result [eg fail\success]" popup messages.
24. [ ] Wrap the Deployment component in a floating frame to enhance its visual presentation and accessibility.
25. [ ] Wallet auto open on tab redirect [happend only on chrome, tested only with Braavos so test with ArgentX].
26. [ ] Create a new "Contract Actions" tab and write under Current Task a contract actions functions methods to it(add future task to add custom contract after).
27. [ ] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts - deploymentData function.
28. [ ] Disable button when sending transaction.
29. [ ] Pop the hover message when blocked Deploy button is pressed.
30. [ ] Add error and block deploy button on special chars in name and symbol and do same on chars and special chars in supply.
31. [ ] Block switch chain when on Braavos and add ! icon with message.
32. [ ] Add a temp logo in header.
33. [ ] Add in history table links and logos for contract address and TxH columns.
34. [ ] Modularize Setting.tsx.
35. [ ]
36. [ ]
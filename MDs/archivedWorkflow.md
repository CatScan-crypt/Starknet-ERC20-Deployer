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
23. [x] Add a temp logo in header.
24. [x] Clear gap on the right of the page.
25. [x] Add a div to nest a curved asset component and wrap the logo and text in it.
26. [x] Create a new "Contract Actions" tab.
27. [x] Add in history table links and logos for contract address and TxH columns.
28. [x] Wallet auto open on tab redirect [happend only on chrome, tested only with Braavos so test with ArgentX](add to known issue).
29. [x] Add no deployed contracts yet in history tab. (DeploymentHistoryTable.jsx)
30. [x] Pop the hover message when the deploy button is pressed when blocked. (DeploymentTable.tsx)
31. [x] Change all px props to % or similar for margins and paddings. (App.css)
32. [x] Replace the deploy button when pending and add "Waiting for user's approval" message instead and "Sending transaction" after - (DeployContractInnerUI.jsx)
33. [x] Add "Transaction result [eg fail\success]" system popup messages. (DeployContractInnerUI.jsx)
34. [x] Add a success\fail message on contract deployment(start with alert and continue with a component). (DeployContractInnerUI.jsx)
35. [x] Make the Tx and CA text in history with copy functionality.
36. [x] Change Wallet Actions text to wallet hash and network and if not connected then it will have a "No Connected Wallet". (walletActions.jsx)
37. [x] Add wallet icons to Wallet actions dropdown and current network.
38. [x] Modularize App.css. (App.css)
39. [x] Fix "No fail" transaction in: Starknet-ERC20-Deployer/src/tabs/deploy/hooks/useDeploymentEffect.ts-deploymentData function. (useDeploymentEffect.ts)
40. [x] Add scroll option for the table when over 7 list items.
41. [x] Change the icons of braavos and argent to starkscan and voyager and change copy icon in history.
42. [x] Add system alert when copy is inited.
43. [x] Add delete row in history table.
44. [x] Add switch for: show all, show only failed, show only successful in history table.
45. [x] Add switch in history for show sepolia, mainnet or both.
46. [x] Rerender the historty table after switch chain was inited.
47. [x] Add Deployment ID column and in localStorage.
48. [x] Modularize Setting.tsx. (Settings.jsx)
49. [x] Fix inaccurate hour timestamp in History table[add a in setting a dropdown to set local time].
50. [x] Fix no chain prop in deploymentData.
51. [x] Update "@starknet-react/core":
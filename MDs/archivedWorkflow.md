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
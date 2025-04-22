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


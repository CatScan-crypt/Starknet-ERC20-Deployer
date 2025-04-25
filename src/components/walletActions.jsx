import React from 'react';
import { useAccount } from '@starknet-react/core';
import DisconnectWallet from './DisconnectWallet';
import SwitchChain from './SwitchChain';
import { StarknetKit } from './starknetkit';
import Dropdown from './ui/dropdown';

function WalletActions({ handleSelect }) {
  const { account } = useAccount(); // Get account status

  // Dynamically build options based on connection status
  const options = [
    <div key="starknetkit"><StarknetKit /></div>,
  ];

  if (account) {
    options.push(<div key="disconnect"><DisconnectWallet /></div>);
    options.push(<div key="switchchain"><SwitchChain /></div>);
  }

  return (
    <div className="wallet-actions">
      <Dropdown
        title="Wallet Actions"
        options={options} // Use the dynamically built options array
        onSelect={handleSelect}
      />
    </div>
  );
}

export default WalletActions;
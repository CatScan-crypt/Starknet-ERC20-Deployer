import React from 'react';
import { useAccount } from '@starknet-react/core';
import DisconnectWallet from './DisconnectWallet';
import SwitchChain from './SwitchChain';
import { StarknetKit } from './starknetkit';
import Dropdown from './ui/dropdown';

function WalletActions({ handleSelect }) {
  const {address, account } = useAccount(); 

  
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
        title={address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Wallet Actions"} 
        options={options} 
        onSelect={handleSelect}
      />
    </div>
  );
}

export default WalletActions;
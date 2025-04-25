import React from 'react';
import { useAccount } from '@starknet-react/core';
import DisconnectWallet from './DisconnectWallet';
import SwitchChain from './SwitchChain';
import { StarknetKit } from './starknetkit';
import Dropdown from './ui/dropdown';

function Header({ handleSelect }) {
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
    <header className="header">
      <LogoTitleWrapper>
        <div className="header-logo-title">
          <img src="/logo.png" alt="Logo" className="header-logo" />
          <span className="header-title">ERC20 Deployer on Starknet</span>
        </div>
      </LogoTitleWrapper>
      <div className="wallet-actions">
        <Dropdown
          title="Wallet Actions"
          options={options} // Use the dynamically built options array
          onSelect={handleSelect}
        />
      </div>
    </header>
  );
}

function LogoTitleWrapper({ children }) {
  return (
    <div style={{
      border: '1px solid black', 
      padding: '25px', // Equal padding
      borderRadius: '25px', // Curved corners
      backgroundColor: 'rgba(192, 192, 192, 0.25)'
    }}>
      {children}
    </div>
  );
}

export { Header, LogoTitleWrapper };
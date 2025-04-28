import React from 'react';
import { useAccount } from "@starknet-react/core";
import { useNetwork } from "@starknet-react/core";
import useDeploymentHistory from '../hooks/useDeploymentHistory'; // Import useDeploymentHistory

const shortenAddress = (address) => {
  if (!address) return "";
  return address.slice(0, 7) + "...." + address.slice(-4);
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

const DeploymentHistoryTable = () => {
  const { deployments, chain } = useDeploymentHistory();
  const { address } = useAccount();

  const renderEmptyMessage = () => {
    if (deployments.length === 0) {
      return <p>No deployment history found for this account.</p>;
    }
    return null;
  };

  // Determine the correct explorer URLs based on the network
  const starkscanBaseUrl = chain?.network === 'mainnet' ? "https://starkscan.co/contract/" : "https://sepolia.starkscan.co/contract/";
  const voyagerBaseUrl = chain?.network === 'mainnet' ? "https://voyager.online/contract/" : "https://sepolia.voyager.online/contract/";

  return (
    <>
      {renderEmptyMessage()}
      <div style={{ maxHeight: '60%',maxWidth: "95%", overflowY: 'auto',marginLeft:"2.5%"}}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Timestamp</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Contract Address</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Transaction Hash</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Token Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Token Symbol</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Initial Supply</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Deployed On Chain</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((deployment, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(deployment.timestamp).toISOString().slice(0, 10)} - {String(new Date(deployment.timestamp).getUTCHours()).padStart(2, '0')}:{String(new Date(deployment.timestamp).getUTCMinutes()).padStart(2, '0')}</td>
                <td
                  style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
                  onClick={() => copyToClipboard(deployment.contractAddress)}
                  title="Click to copy"
                >
                  {shortenAddress(deployment.contractAddress)}
                  <img 
                    src="/public/tempIcon.png" 
                    alt="Copy" 
                    style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(deployment.contractAddress);
                    }}
                  />
                  <div>
                    <a href={`${voyagerBaseUrl}${deployment.contractAddress}`} target="_blank" rel="noopener noreferrer">
                      <img src="/voyager.png" alt="Voyager" width="20" height="20" />
                    </a>
                    <a href={`${starkscanBaseUrl}${deployment.contractAddress}`} target="_blank" rel="noopener noreferrer">
                      <img src="/starkscan.png" alt="Starkscan" width="20" height="20" />
                    </a>
                  </div>
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.status}</td>
                <td
                  style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
                  onClick={() => copyToClipboard(deployment.transactionHash)}
                  title="Click to copy"
                >
                  {shortenAddress(deployment.transactionHash)}
                  <img 
                    src="/public/tempIcon.png" 
                    alt="Copy" 
                    style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(deployment.transactionHash);
                    }}
                  />
                  <div>
                    <a href={`${voyagerBaseUrl.replace('contract', 'tx')}${deployment.transactionHash}`} target="_blank" rel="noopener noreferrer">
                      <img src="/voyager.png" alt="Voyager" width="20" height="20" />
                    </a>
                    <a href={`${starkscanBaseUrl.replace('contract', 'tx')}${deployment.transactionHash}`} target="_blank" rel="noopener noreferrer">
                      <img src="/starkscan.png" alt="Starkscan" width="20" height="20" />
                    </a>
                  </div>
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenSymbol}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.initialSupply}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{chain?.network || 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeploymentHistoryTable;
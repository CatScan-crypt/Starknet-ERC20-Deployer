import React, { useState } from 'react';
import useDeploymentHistory from '../hooks/useDeploymentHistory'; 
import { shortenAddress, copyToClipboard } from '../hooks/useDeploymentHistory';
import { FilterToggle, EmptyMessage, ExplorerLinks, StatusToggle } from './UIComponents';

const DeploymentHistoryTable = () => {
  const { deployments, chain } = useDeploymentHistory();
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState('all');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const filteredDeployments = deployments.filter((deployment) => {
    const matchesFilter = filter === 'all' || (filter === 'test' && chain?.network !== 'mainnet') || (filter === 'main' && chain?.network === 'mainnet');
    const matchesStatus = status === 'all' || deployment.status === status;
    return matchesFilter && matchesStatus;
  });

  const starkscanBaseUrl = chain?.network === 'mainnet' ? "https://starkscan.co/contract/" : "https://sepolia.starkscan.co/contract/";
  const voyagerBaseUrl = chain?.network === 'mainnet' ? "https://voyager.online/contract/" : "https://sepolia.voyager.online/contract/";

  return (
    <>
      <FilterToggle filter={filter} onChange={handleFilterChange} />
      <StatusToggle status={status} onChange={handleStatusChange} />
      <EmptyMessage deployments={deployments} />
      <div style={{ maxHeight: '60%', maxWidth: "95%", overflowY: 'auto', marginLeft: "2.5%" }}>
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
            {filteredDeployments.map((deployment, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(deployment.timestamp).toISOString().slice(0, 10)} - {String(new Date(deployment.timestamp).getUTCHours()).padStart(2, '0')}:{String(new Date(deployment.timestamp).getUTCMinutes()).padStart(2, '0')}</td>
                <td
                  style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
                  onClick={() => copyToClipboard(deployment.contractAddress)}
                  title="Click to copy"
                >
                  {shortenAddress(deployment.contractAddress)}
                  <img 
                    src="/public/copyIcon.png" 
                    alt="Copy" 
                    style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(deployment.contractAddress);
                    }}
                  />
                  <ExplorerLinks 
                    voyagerUrl={`${voyagerBaseUrl}${deployment.contractAddress}`} 
                    starkscanUrl={`${starkscanBaseUrl}${deployment.contractAddress}`} 
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.status}</td>
                <td
                  style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
                  onClick={() => copyToClipboard(deployment.transactionHash)}
                  title="Click to copy"
                >
                  {shortenAddress(deployment.transactionHash)}
                  <img 
                    src="/public/copyIcon.png" 
                    alt="Copy" 
                    style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(deployment.transactionHash);
                    }}
                  />
                  <ExplorerLinks 
                    voyagerUrl={`${voyagerBaseUrl.replace('contract', 'tx')}${deployment.transactionHash}`} 
                    starkscanUrl={`${starkscanBaseUrl.replace('contract', 'tx')}${deployment.transactionHash}`} 
                  />
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
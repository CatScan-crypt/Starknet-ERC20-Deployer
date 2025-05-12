import React, { useState } from 'react';
import useDeploymentHistory from '../hooks/useDeploymentHistory';
import { FilterToggle, EmptyMessage, StatusToggle } from './UIComponents';
import DeploymentRowLinks from './DeploymentRowLinks';

const DeploymentHistoryTable = () => {
  const { deployments, chain } = useDeploymentHistory();
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState('all');
  const [selectedRows, setSelectedRows] = useState([]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      newSelectedRows.splice(newSelectedRows.indexOf(index), 1);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);
  };
  
  const handleDeletaButtonClick = () => {
    console.log('Button clicked!');
  };

  const filteredDeployments = deployments.filter((deployment) => {
    const matchesFilter = filter === 'all' || 
    (filter === 'test' && chain?.network !== 'mainnet') || 
    (filter === 'main' && chain?.network === 'mainnet');
    const matchesStatus = status === 'all' || deployment.status === status;
    return matchesFilter && matchesStatus;
  });

  const starkscanBaseUrl = chain?.network === 'mainnet' ? 
  "https://starkscan.co/contract/" : "https://sepolia.starkscan.co/contract/";
  const voyagerBaseUrl = chain?.network === 'mainnet' ? 
  "https://voyager.online/contract/" : "https://sepolia.voyager.online/contract/";

  return (
    <>

      <EmptyMessage deployments={deployments} />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <button onClick={handleDeletaButtonClick} style={{ marginBottom: '10px', padding: '8px 16px', cursor: 'pointer' , maxWidth:'5%' }}>
      Delete Selected
       </button>
        <FilterToggle filter={filter} onChange={handleFilterChange} />
        <StatusToggle status={status} onChange={handleStatusChange} />
        </div>
        <div style={{ maxHeight: '60%', maxWidth: "95%", overflowY: 'auto', marginLeft: "2.5%" }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Select</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Timestamp</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Contract Address</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Transaction Hash</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Token Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Token Symbol</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Initial Supply</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Deployed On Chain</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeployments.map((deployment, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: selectedRows.includes(index) ? '#f0f8ff' : 'transparent',
                  cursor: 'pointer',
                }}
              >
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {new Date(deployment.timestamp).toISOString().slice(0, 10)} - 
                  {String(new Date(deployment.timestamp).getUTCHours()).padStart(2, '0')}:
                  {String(new Date(deployment.timestamp).getUTCMinutes()).padStart(2, '0')}
                </td>
                <DeploymentRowLinks
                  deployment={deployment}
                  voyagerBaseUrl={voyagerBaseUrl}
                  starkscanBaseUrl={starkscanBaseUrl}
                />
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenSymbol}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.initialSupply}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{chain?.network || 'Unknown'}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeploymentHistoryTable;

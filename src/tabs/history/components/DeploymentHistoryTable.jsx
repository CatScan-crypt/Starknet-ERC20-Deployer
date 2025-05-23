import React, { useEffect, useState } from 'react';
import useDeploymentHistory from '../hooks/useDeploymentHistory';
import { EmptyMessage, StatusToggle } from './UIComponents';
import DeploymentRowLinks from './DeploymentRowLinks';
import AlertMessage from '../../../components/ui/AlertMessage';
import { useAccount } from '@starknet-react/core';
import { handleDeleteStoredDeployments } from './handleDeleteStoredDeployments';

const DeploymentHistoryTable = () => {
  const { deployments, chain } = useDeploymentHistory();
  const { address } = useAccount();

  const [status, setStatus] = useState('all');
  const [selectedRows, setSelectedRows] = useState([]);
  const [alert, setAlert] = useState({ visible: false, type: '', message: '' });
  const [timezoneOffset, setTimezoneOffset] = useState(0);
  const [localDeployments, setLocalDeployments] = useState([]);

  useEffect(() => {
    const savedTimezone = localStorage.getItem('selectedTimezone');
    if (savedTimezone) {
      setTimezoneOffset(parseInt(savedTimezone, 10));
    }
  }, []);

  useEffect(() => {
    setLocalDeployments(deployments); // Sync from hook
  }, [deployments]);

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

  const handleDeleteStoredDeploymentsWrapper = () => {
    handleDeleteStoredDeployments({
      address,
      selectedRows,
      setLocalDeployments,
      setSelectedRows,
      setAlert,
    });
  };

  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
    setTimeout(() => setAlert({ visible: false, type: '', message: '' }), 3000);
  };

  const filteredDeployments = localDeployments.filter((deployment) => {
    const matchesStatus = status === 'all' || deployment.status === status;
    return matchesStatus;
  });

  const starkscanBaseUrl = chain?.network === 'mainnet'
    ? "https://starkscan.co/contract/"
    : "https://sepolia.starkscan.co/contract/";
  const voyagerBaseUrl = chain?.network === 'mainnet'
    ? "https://voyager.online/contract/"
    : "https://sepolia.voyager.online/contract/";

  const adjustedHours = (timestamp) => {
    const date = new Date(timestamp);
    return String(date.getUTCHours() + timezoneOffset).padStart(2, '0');
  };

  return (
    <>
      <EmptyMessage deployments={localDeployments} />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button onClick={handleDeleteStoredDeploymentsWrapper} style={{ marginBottom: '10px', padding: '8px 16px', cursor: 'pointer', maxWidth: '10%' }}>
          Delete Selected
        </button>
        <StatusToggle status={status} onChange={handleStatusChange} />
      </div>
      <div style={{ maxHeight: '60%', maxWidth: "95%", overflowY: 'auto', marginLeft: "2.5%" }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Select</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Timestamp</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>CA</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>TxH</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Symbol</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Supply</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Chain</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
            </tr>
          </thead>
            <tbody>
              {[...filteredDeployments].reverse().map((deployment, index) => (
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
                    {adjustedHours(deployment.timestamp)}:
                    {String(new Date(deployment.timestamp).getUTCMinutes()).padStart(2, '0')}
                  </td>
                  <DeploymentRowLinks
                    deployment={deployment}
                    voyagerBaseUrl={voyagerBaseUrl}
                    starkscanBaseUrl={starkscanBaseUrl}
                    showAlert={showAlert}
                  />
                  <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenName}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenSymbol}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.initialSupply}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.chain || 'Unknown'}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.id}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
      {alert.visible && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ visible: false, type: '', message: '' })}
        />
      )}
    </>
  );
};

export default DeploymentHistoryTable;

import React, { useState } from 'react';

const NewComponent = () => {
  const [deploymentStatus, setDeploymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDeployClick = async () => {
    setLoading(true); // Set loading to true when the button is clicked
    setDeploymentStatus(null); // Clear previous status

    try {
      const response = await fetch('http://localhost:3001/deploy', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        console.log("Deployment data:", data); // Log the entire response
        setDeploymentStatus(data); // Store the entire response
      } else {
        setDeploymentStatus({ success: false, output: 'Deployment failed.' });
      }
    } catch (error) {
      setDeploymentStatus({ success: false, output: `Error initiating deployment: ${error}` });
    } finally {
      setLoading(false); // Set loading to false when the response is received
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>

      <div>
        <h3>Deployment Status:</h3>
        {loading ? (
          <p>Loading...</p>
        ) : deploymentStatus ? (
          <table style={{ width: '50%', border: '1px solid black', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ width: '20%', border: '1px solid black' }}>Status</th>
                <th style={{ width: '80%', border: '1px solid black' }}>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '20%', border: '1px solid black' }}>{deploymentStatus.success ? 'Success' : 'Failed'}</td>
                <td style={{ width: '80%', border: '1px solid black' }}><pre style={{ width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word', overflow: 'auto', whiteSpace: 'pre-wrap' }}>{deploymentStatus.output}</pre></td>
              </tr>
              <tr>
                <td style={{ width: '20%', border: '1px solid black' }}>Class Hash</td>
                <td style={{ width: '80%', border: '1px solid black' }}><pre style={{ width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word', overflow: 'auto', whiteSpace: 'pre-wrap' }}>{deploymentStatus.classHash}</pre></td>
              </tr>
              <tr>
                <td style={{ width: '20%', border: '1px solid black' }}>Contract Address</td>
                <td style={{ width: '80%', border: '1px solid black' }}><pre style={{ width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word', overflow: 'auto', whiteSpace: 'pre-wrap' }}>{deploymentStatus.contractAddress}</pre></td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Click Deploy to start the deployment.</p>
        )}
      </div>
      <div style={{ width: '95%', marginLeft: '20px', marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
        <button
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleDeployClick}>
          Deploy
        </button>
      </div>
    </div>
  );
};

export default NewComponent;
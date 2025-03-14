import React, { useState } from 'react';

const NewComponent = () => {
  const [deploymentStatus, setDeploymentStatus] = useState('');

  const handleDeployClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/deploy', {
        method: 'POST',
      });

      if (response.ok) {
        console.log("Deployment initiated successfully!");
        const data = await response.json(); // Parse the JSON response
        setDeploymentStatus(data.output); // Display the output from the server
      } else {
        setDeploymentStatus('Deployment failed.');
      }
    } catch (error) {
      setDeploymentStatus(`Error initiating deployment: ${error}`);
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h2>New Component</h2>
      <p>This is a simple component.</p>
      <div style={{ width: '95%', marginLeft: '20px', marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
        <button
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleDeployClick}
        >
          Deploy
        </button>
      </div>
      <div>
        <h3>Deployment Status:</h3>
        <p>{deploymentStatus}</p>
      </div>
    </div>
  );
};

export default NewComponent;
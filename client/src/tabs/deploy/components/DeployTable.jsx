import React from 'react';

function DeployTable({ networkConfig }) {
  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '20px' }}>
      <h1>Deploy Page</h1>
      {networkConfig ? (
        networkConfig.error ? (
          <p>Error: {networkConfig.error}</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <table style={{ borderCollapse: 'collapse', width: '95%', marginLeft: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Option</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(networkConfig).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{key}</td>
                  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}><input type="text" defaultValue={value} style={{ width: '100%' }} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )
      ) : (
        <p>Loading network configuration...</p>
      )}
    </div>
  );
}

export default DeployTable;
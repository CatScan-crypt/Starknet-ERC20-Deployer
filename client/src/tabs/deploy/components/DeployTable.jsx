import React, { useState } from 'react';

function DeployTable({ networkConfig, handleUpdate }) {
  const [updatedConfig, setUpdatedConfig] = useState({});

  const handleInputChange = (key, value) => {
    setUpdatedConfig(prevConfig => ({
      ...prevConfig,
      [key]: value
    }));
  };
  const handleUpdateClick = () => {
    handleUpdate(updatedConfig);
  };

  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '20px' }}>
      <h1>Deploy Page</h1>
      {networkConfig ? (
        networkConfig.error ? (
          <p>Error: {networkConfig.error}</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '26%' }}>
            <table style={{ borderCollapse: 'collapse', width: '95%', marginLeft: '20px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' , width: '40%'  }}>Option</th>
                  <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center'  }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(networkConfig).map(([key, value]) => (
                  <tr key={key}>
                    <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{key}</td>
                    <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>
                      <input
                        type="text"
                        defaultValue={value}
                        style={{ width: '100%' }}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Button aligned with the table */}
            <div style={{ width: '95%', marginLeft: '20px', marginTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
              <button
                style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                onClick={handleUpdateClick}>
                Update
              </button>
            </div>
          </div>
        )
      ) : (
        <p>Loading network configuration...</p>
      )}
    </div>
  );
}
export default DeployTable;

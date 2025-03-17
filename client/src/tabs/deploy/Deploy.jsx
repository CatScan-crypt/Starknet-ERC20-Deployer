import React, { useState } from 'react';
import DeployContractInner from './components/DeployContractInner'


function Deploy() {


  return (

    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '20px' }}>
      <button onClick={() => {
  const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      id: 1,
      jsonrpc: '2.0',
      method: 'starknet_getTransactionReceipt',
      params: ['0x06107324ae5cc8a6cba92d93ba29f7804f81fce0aee49c0623ad099bd5a9e647']
    })
  };

  fetch('https://starknet-sepolia.public.blastapi.io', options)
    .then(res => res.json())
    .then(data => console.log(data.result.events[0].from_address))
    .then(res => console.log(res))
    .catch(err => console.error(err));
}}
>
  Fetch Transaction Receipt
</button>
      <DeployContractInner/>
    </div>
    
  );
}

export default Deploy;
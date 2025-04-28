import React from 'react';

export const FilterToggle = ({ filter, onChange }) => (
  <div style={{ marginBottom: '16px' }}>
    <label>
      <input
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={onChange}
      />
      Show All
    </label>
    <label style={{ marginLeft: '16px' }}>
      <input
        type="radio"
        value="test"
        checked={filter === 'test'}
        onChange={onChange}
      />
      Show Test
    </label>
    <label style={{ marginLeft: '16px' }}>
      <input
        type="radio"
        value="main"
        checked={filter === 'main'}
        onChange={onChange}
      />
      Show Main
    </label>
  </div>
);

export const EmptyMessage = ({ deployments }) => (
  deployments.length === 0 ? <p>No deployment history found for this account.</p> : null
);

export const ExplorerLinks = ({ voyagerUrl, starkscanUrl }) => (
  <div>
    <a href={voyagerUrl} target="_blank" rel="noopener noreferrer">
      <img src="/voyager.png" alt="voyager" width="20" height="20" />
    </a>
    <a href={starkscanUrl} target="_blank" rel="noopener noreferrer">
      <img src="/starkscan.png" alt="starkscan" width="20" height="20" />
    </a>
  </div>
);
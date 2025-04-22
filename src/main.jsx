import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StarknetProvider } from "./components/starknet-provider.tsx";
import { Analytics } from '@vercel/analytics/react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarknetProvider>
      <App />
      <Analytics />
    </StarknetProvider>
  </StrictMode>,
)

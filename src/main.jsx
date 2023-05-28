import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './components/context/context.jsx'
import toast, { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <Toaster  position="bottom-center"/>
    </AppProvider>
  </React.StrictMode>,
)

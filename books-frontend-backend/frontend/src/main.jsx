import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './context/AppContext';
import App from './components/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AppProvider>
      <App />
     </AppProvider> 
  </React.StrictMode>,
)

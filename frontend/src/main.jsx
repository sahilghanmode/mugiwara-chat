import React  from 'react'
import { Toaster } from './components/ui/sonner.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
      <App/>
      <Toaster closeButton> </Toaster>
  </AuthContextProvider>
  </React.StrictMode>
)

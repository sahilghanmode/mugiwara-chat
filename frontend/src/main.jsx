import { StrictMode } from 'react'
import { Toaster } from './components/ui/sonner.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <Toaster closeButton></Toaster>
  </div>
)

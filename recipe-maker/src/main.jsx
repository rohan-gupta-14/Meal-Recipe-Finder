import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

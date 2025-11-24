import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStyle } from './globalStyle'

createRoot(document.getElementById('root')).render(
  <>
    <App /><GlobalStyle/>
  </>,
)

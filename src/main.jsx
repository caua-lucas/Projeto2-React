
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalStyle } from './Containers/Styles/globalStyle'
import AppRoutes from "./routes"

createRoot(document.getElementById('root')).render(
  <>
    <AppRoutes />
    <GlobalStyle />
  </>,
)

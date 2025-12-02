import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Containers/Home'
import Users from './Containers/Users'
import { GlobalStyle } from './globalStyle'

createRoot(document.getElementById('root')).render(
  <>
    <Users />
    <GlobalStyle />
  </>,
)

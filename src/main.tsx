import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {NextUIProvider} from '@nextui-org/react'
import Navbar from './components/Navbar.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <Navbar/>
      <App />
    </NextUIProvider>
  </StrictMode>,
)

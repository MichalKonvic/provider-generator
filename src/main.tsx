import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from './components/theme-provider'
import { GeneratorProvider } from './providers/GeneratorProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeneratorProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
    </GeneratorProvider>
  </React.StrictMode>,
)

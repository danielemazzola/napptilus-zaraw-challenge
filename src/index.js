import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globalStyle.css'
import { CharacterProvider } from './context/CharacterContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>
)

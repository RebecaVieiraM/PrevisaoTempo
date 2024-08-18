import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Previsoes from './previsoes.jsx' // Importa o componente Previsoes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Previsoes /> {/* Renderiza o componente previsões */}
  </StrictMode>
)

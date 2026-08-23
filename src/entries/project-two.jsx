import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import ProjectPlaceholder from '../pages/ProjectPlaceholder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectPlaceholder title="Project Two" />
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalContextComp from './Context/GlobalContextComp.tsx'
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <GlobalContextComp>
    <App />
  </GlobalContextComp>
)

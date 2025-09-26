import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import "../index.css";
import NavBar from './components/NavBar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>,
)

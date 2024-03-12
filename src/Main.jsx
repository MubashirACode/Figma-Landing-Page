import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { Hero } from './Hero.jsx'
import { Bottom } from './bottom.jsx'
import { Footer } from './footer.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <App />
    < Hero/>
    <Bottom />
    <Footer />
  
   
  </React.StrictMode>,
  </>
)

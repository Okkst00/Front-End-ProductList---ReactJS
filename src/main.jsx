import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App.jsx'
import './index.css'
import ScrollToTop from "react-scroll-to-top";
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollToTop smooth className='rounded-5 shadow-lg w-auto' color="#6f00ff" />
    <App />
  </React.StrictMode>,
)

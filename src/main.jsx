/**
 * @copyright 2024 dhiwaaqsha
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


/**
 * Components
 */
import App from './App.jsx';


/**
 * CSS link
 */
import './index.css';
import 'lenis/dist/lenis.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

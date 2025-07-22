import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { WeatherProvider } from './Contexts/Weather.jsx'

createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <App />
    </WeatherProvider>
    
  
)

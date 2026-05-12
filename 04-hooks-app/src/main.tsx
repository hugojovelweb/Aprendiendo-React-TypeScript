import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
//import { TrafficLight } from './01-useState/TrafficLight';
// import HooksApp from './HooksApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    <TrafficLightWithEffect />
  </StrictMode>,
)

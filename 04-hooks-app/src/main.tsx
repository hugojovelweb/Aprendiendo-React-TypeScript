import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksApp } from './05-useReducer/TaskApp';



// import { FocusScreen } from './04-useRef/FocusScreen';
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithWithHook'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// //import { TrafficLight } from './01-useState/TrafficLight';
// import HooksApp from './HooksApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook/> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    <TasksApp />

  </StrictMode>,
)

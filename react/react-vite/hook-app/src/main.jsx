import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Simpleform } from './02-useEffect/Simpleform'
// import { Counterwithcustomhooks } from './01-usestate/counterwithcustomhoocks'
// import { HooksApp } from './hooksapp.jsx'
// import { CounterApp } from './usestate/setcounter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Simpleform/>
  </React.StrictMode>,
)

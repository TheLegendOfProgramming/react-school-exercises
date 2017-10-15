import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App2 from './App2'
import Clock from './Clock'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App id='app'>
        <Clock id='clock' message='Check it out, a clock!' tick='1000'/>
    </App>,
document.getElementById('root'))
registerServiceWorker()

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import upper from './stores/dataStore1'
import personData from './stores/dataStore2'
import jokester from './stores/jokesStore'
import cars from './stores/Car.jsx'

const {firstName, lastName} = personData


class App extends Component {
  constructor() {
    super();
    let jokesArray = ['joke1','joke2','joke3']

    jokesArray.forEach(function(joke) {
      jokester.addJoke(joke)
    })
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {upper("please uppercase me")}
        </p>
        <p>
         {personData.firstName}
        </p>
        <p>
          {jokester.getRandomJoke()}
        </p>

        <p>
          {cars.getCar(2).make} from {cars.getCar(2).year}
        </p>
      </div>
    )
  }
}

export default App

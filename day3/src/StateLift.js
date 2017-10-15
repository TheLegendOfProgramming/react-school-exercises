import React from "react";

const myStyle= {
  borderRadius: 4,
  borderWidth: 1,
  borderColor: 'steelBlue',
  borderStyle: "solid",
  display: "inlineBlock", 
  float: "left", 
  margin: 5 ,
  padding: 8,
}

/* You must complete this Component. 
  - It should receive a addPerson handler from the parent
  - And use the Controlled Component Pattern to read handle inputs
*/
class NewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Default'}
  }
  handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
  } 

  handleClick = () => {
        this.props.onPersonAdd(this.state.value)
  }

  render() {
    return (
      <div>
        <p>New Person:</p>
        <input value={this.state.value}
            onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Save</button>
      </div>
    )
  }
}

/* You must complete this Component. 
  - It should receive the list of persons from the the parent
  - And create an <ul> containing all names 
*/
class AllPersons extends React.Component {
  constructor(props) {
    super(props)
  }
  renderPersons() {
    console.log('hi')
    return this.props.persons.map((person, index) => <li key={index}>{person.name}</li> )
  }
  render() {
    return (
      <div>
        <p>All Persons</p>
        <ul>
            {this.renderPersons()}
        </ul>
      </div>
    )
  }
}


class StateLift extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
        persons: [
            { name: "Peter" },
            { name: "Ole" }
        ]
    }    
  }

  addPerson = (name) => {

      this.setState({
          persons: this.state.persons.concat({ name })
      })
  }

  render() {
    return (
      <div >
        <h2>Lifting State Up Demo</h2>
        <h4>Total Persons: {this.state.persons.length}</h4>
        <div style={myStyle}>
          <AllPersons persons={this.state.persons} />
        </div>
        <div style={myStyle}>
          <NewPerson onPersonAdd={this.addPerson} />
        </div>
      </div>
    );
  }
}

export default StateLift
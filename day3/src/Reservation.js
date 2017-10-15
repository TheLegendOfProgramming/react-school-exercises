import React from 'react'

export default class  Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nameOfGuest: "What's your name?",
        isGoing: true,
        numberOfGuests: 2
      };
  
    }
  
    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      event.preventDefault();
      
    }

    handleSubmit = (event) => {
        alert('Number of guests: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input
            name="nameOfGuest"
            type="text"
            value={this.state.nameOfGuest}            
            onChange={this.handleInputChange} />
        </label>
        <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />                  
        </form>
      );
    }
  }
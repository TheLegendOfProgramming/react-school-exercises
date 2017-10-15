import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
    //   this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick = () => {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
        console.log(this.state.isToggleOn)
        if(!this.state.isToggleOn)
            this.props.onOff()
        else
            this.props.onOn()
      }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

  export default Toggle
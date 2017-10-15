import React, { Component } from 'react'
import Toggle from './Toggle'


class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {date: new Date()}
      this.props = props
      console.log(this.props)
    }
  
    componentDidMount() {
      this.startClock()
    }

    startClock = () => {
      this.timerID = setInterval(
        () => this.tick(),
        this.props.tick
      );
    }

    stopClock = () => {
      clearInterval(this.timerID);
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
      console.log('componentWillUnmount')
    }
  
    tick = () => {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      console.log('componentDidMount')      
      return (
        <div id={this.props.id}>
          <h1>{this.props.message}</h1>
          <h2>It is {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}.</h2>
          <Toggle onOn={this.stopClock} onOff={this.startClock} parent={this}/>
        </div>
      );
    }
  }

export default Clock
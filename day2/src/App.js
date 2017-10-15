import React, {Component} from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default App

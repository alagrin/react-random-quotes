import React, { Component } from 'react';
import './App.css';
import DisplayContent from './components/DisplayContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        'Quote number 1'
      ]
    };
  }
  
  

  render() {
    return (
      <div className="App">
        <DisplayContent text="Your Random Quote"/>
        <div>
          {this.state.quotes[0]}
        </div>
      </div>
    );
  }
}

export default App;

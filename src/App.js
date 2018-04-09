import React, { Component } from 'react';
import './App.css';
import DisplayContent from './components/DisplayContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="App">
        <DisplayContent text="Your Quote of the Day" />
      </div>
    );
  }
}

export default App;

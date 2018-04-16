import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import getQuote from "./quoteGrab";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      randomQuote: 'Temporary quote'
    }
    this.handleRandomQuote = this.handleRandomQuote.bind(this);
  }
  
  componentDidMount() {
    fetch('http://quotes.rest/qod.json', {
    headers: {
      "Accept": "application/json",
      "X-TheySaidSo-Api-Secret": "OqhHWrDT_4T6zLqsQlq76AeF"
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    let quoteResponse = data.contents.quotes.map((randomQuote) => {
      return (
        <div key={randomQuote.id}>
        <p>{randomQuote.title}</p>
        <h4>{randomQuote.author}</h4>
        <p>{randomQuote.quote}</p>
        </div>
      )
    })
    this.setState({
      quote: quoteResponse
    });
  });
}

handleRandomQuote() {
  let result = getQuote();
  // this.setState({
  //   randomQuote: result
  // });
}

render() {
  return (
    <div className="App card light-blue">
      <h2>Your Quote of the Day</h2> 
    <div className="row">
      <Button buttonName="Twitter" onClick={this.handleRandomQuote}/>
      <Button className="btn" buttonName="Facebook" />
      <Button className="btn" buttonName="Quote" />
    </div>
    <div>{this.state.quote}</div>
    <div>
      <h3>Here's your random quote: </h3>
      <p>{this.state.randomQuote}</p>
    </div>
    </div>
  );
}
}

export default App;

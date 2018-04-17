import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
      randomQuote: '',
      author: ''
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
    const API_KEY = 'OqhHWrDT_4T6zLqsQlq76AeF';
    return fetch(`http://quotes.rest/quote/random.json?api_key=${API_KEY}`, {
      headers: {
        "Accept": "application/json",
        "X-TheySaidSo-Api-Secret": "OqhHWrDT_4T6zLqsQlq76AeF"
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      let quote = data.contents.quote;
      let author = data.contents.author;
      this.setState({
        randomQuote: quote,
        author: author
      });
    });
  }

render() {
  return (
    <div className="App card light-blue">
      <h2>Your Quote of the Day</h2> 
    <div className="row">
      <Button buttonName="Random" onClick={this.handleRandomQuote}/>
      <Button className="btn" buttonName="Facebook" />
      <Button className="btn" buttonName="Twitter" />
    </div>
    <div>{this.state.quote}</div>
    <div id="random" className="card">
      <h3>Here's your random quote: </h3>
      <p>{this.state.randomQuote}... A quote by {this.state.author}</p>
    </div>
    </div>
  );
}
}

export default App;

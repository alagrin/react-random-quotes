import React, { Component } from 'react';
import Button from './Button';

const cardStyle = {
    borderRadius: '8px',
};

const divStyle = {
    border: '2px solid black',
    textAlign: 'center',
    margin: '0 auto',
    width: '50%'
};

class DisplayContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: []
        }
    }

//We will fetch quotes from the API and serve to this component's state
//Will also try to get API Key and recieve random quotes for next try
    componentDidMount() {
      fetch('http://quotes.rest/qod.json', {
         headers: {
             "Accept": "application/json",
             "X-TheySaidSo-Api-Secret": "OqhHWrDT_4T6zLqsQlq76AeF"
         }
      }).then(response => {
          return response.json()
      }).then(data => {
          console.log(data);
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
    
    render() {
        return (
            <div className="row">
              <div className="col s12">
                <div className="card light-blue" style={cardStyle}>
                    <h2>{this.props.text}</h2>
                    <div style={divStyle}>
                      {this.state.quote}
                    </div>
                    <Button buttonName="Twitter" />
                    <Button buttonName="Facebook" />
                    <Button buttonName="New Quote" />
                </div>
            </div>
            </div>
        );
    }
}

export default DisplayContent;

//button style will be aligned right; will alter state of displaycontent to grab new quote
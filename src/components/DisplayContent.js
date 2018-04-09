import React, { Component } from 'react';
import Button from './Button';

// const divStyle = {
//     width: '600px'
// };

const pStyle = {
    border: '2px solid black',
    textAlign: 'center',
    margin: '0 auto',
    width: '50%'
};

class DisplayContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="row">
              <div className="col s12">
                <div className="card light-blue">
                    <h2>{this.props.text}</h2>
                    <p style={pStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, assumenda? Dignissimos voluptatibus ut illo suscipit.</p>
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
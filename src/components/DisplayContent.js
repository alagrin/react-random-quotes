import React, { Component } from 'react';
import Button from './Button';

const DisplayContent = (props) => {
    return (
        <div className="row">
          <div class="col s12 m6">
            <div className="card light-blue">
                <h1>{props.text}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, assumenda? Dignissimos voluptatibus ut illo suscipit.</p>
                <Button />
            </div>
        </div>
        </div>
    );
}

export default DisplayContent;

//button style will be aligned right; will alter state of displaycontent to grab new quote
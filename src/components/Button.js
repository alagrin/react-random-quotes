import React from 'react';

const buttonStyle = {
    borderRadius:'50%',
    height: '80px', 
    width: '80px'
};

const Button = (props) => {
    return (
    <button style={buttonStyle}>
            <a href="../public/index.html">{props.buttonName}</a>
    </button>
    );
}

export default Button;

//a href will show props text or the particular function of the button
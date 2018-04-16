import React from 'react';

const Button = (props) => {
        return (
            <div>
                <a className="waves-effect waves-light btn" onClick={props.onClick}>{props.buttonName}</a>
            </div>
            );
}
export default Button;
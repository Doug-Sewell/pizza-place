import React from 'react';
import classes from './Button.module.css';

const Button = props => {

    //Update these properties later for different colored buttons if desired.
    //This can be handled through props.
    let buttonBackground = {
        backgroundColor: '#FFF',
        color: '#777'
    };

    return (
        <div className={classes.Parent}>
            <a
                style={buttonBackground}
                className={classes.btn}
                href="#">
                {props.children}
            </a>
        </div>
    )
}

export default Button;
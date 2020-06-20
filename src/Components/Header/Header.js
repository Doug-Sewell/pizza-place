import React from 'react';
import classes from './Header.module.css';

import Button from '../../UI/Button/Button';
//Signage phto for background here: https://www.pexels.com/photo/red-pizza-neon-signage-2914550/

const header = props => {

    const backgroundStyle = {
        backgroundImage: `linear-gradient(${props.gradient[0]},${props.gradient[1]},${props.gradient[2]}),url(${props.background})`
    }

    console.log(props.gradient)

    return (
        <header
            style={backgroundStyle}
            className={classes.Header}>
            <div className={classes.TextBox}>
                <h1 className={classes.HeaderPrimary}>
                    <span className={classes.HeaderPrimaryMain}>{props.primary}</span>
                    <span className={classes.HeaderPrimarySub}>{props.secondary}</span>
                </h1>
                <div className={classes.animatedBtn}>
                    <Button>See Our Pizzas!</Button>
                </div>
            </div>
        </header>
    )
}

export default header;
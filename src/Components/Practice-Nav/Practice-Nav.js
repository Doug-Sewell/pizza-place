import React from 'react';
import classes from './Practice-Nav.module.scss';

const PracticeNav = () => 
<nav>
    <ul className={classes.navigation}>
        <li><a href="#">About us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <div className={classes.buttons}>
        <a class={classes.btnMain} href="#">Sign up</a>
        <a class={classes.btnHot} href="#">Get a quote</a>
    </div>
</nav>

export default PracticeNav;
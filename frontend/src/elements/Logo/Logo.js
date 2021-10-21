import React from 'react'

import logo_file from '../../assets/images/logo_main_white.png';
import classes from './Logo.module.css';

const logo = () => {
    
    return(
        <img className={classes.logo_size} src={logo_file} alt="Logo" />
    )
}

export default logo;
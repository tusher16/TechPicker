import React from 'react';

import classes from './CardImage.module.css';

import demo1 from '../../../assets/images/AORUS3080Ti12G.png';


function CardImage() {
    return (
        <div>
            <img  className={classes.CardImageStyle} src={demo1}  />
        </div>
    )
}

export default CardImage;

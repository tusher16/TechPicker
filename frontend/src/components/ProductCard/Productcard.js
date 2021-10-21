import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";


import classes from './Productcard.module.css';
import Card_Image from './CardImage/CardImage';

import demo1 from '../../assets/images/AORUS3080Ti12G.png';
import demo2 from '../../assets/images/gigmonitor.png';
import demo3 from '../../assets/images/mb.png';
import demo4 from '../../assets/images/laptop.png';

import { Col, Row } from 'react-bootstrap';


function Productcard() {
    return (
        
        <div className={classes.ProductCardStyle}>
            
            <Row>
                
            <div className="w-full text-center pb-8">
                    
                
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-10">
                    Featured Product
                    </h1>

                    
                </div>
                <Col sm={12} md={6} Lg={4} xl={3}>
                
                <Card>
                        <img className={classes.cardImageStyle}
                            src={demo1}
                            alt="Card Image"
                        />

                        <div className="mt-4 pl-2 mb-2 flex justify-between ">
                        <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0">AORUS RTX 3080 XTREME 10GB</p>
                        <p className="text-lg text-gray-800 mt-2">$340</p>
                        
                        </div>

                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        
                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faShoppingCart} />
                        
                        </div>
                    </div>
                </Card>
                
                </Col>

                <Col sm={12} md={6} Lg={4} xl={3}>

                <Card>
                        <img className={classes.cardImageStyle}
                            src={demo2}
                            alt="Card Image"
                        />

                        <div className="mt-4 pl-2 mb-2 flex justify-between ">
                        <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0">GIGABYTE G27F Monitor</p>
                        <p className="text-lg text-gray-800 mt-2">$340</p>
                        </div>

                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        
                        <div className="flex flex-col-reverse mb-1 mr-6 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faShoppingCart} />
                        
                        </div>
                    </div>
                </Card>
                    
                </Col>

                <Col sm={12} md={6} Lg={4} xl={3}> 
                
                <Card>
                        <img className={classes.cardImageStyle}
                            src={demo3}
                            alt="Card Image"
                        />

                        <div className="mt-4 pl-2 mb-2 flex justify-between ">
                        <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0">Z590 AORUS XTREME</p>
                        <p className="text-lg text-gray-800 mt-2">$340</p>
                        
                        </div>

                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        
                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faShoppingCart} />
                        
                        </div>
                    </div>
                </Card>
                
                
                </Col>

                <Col sm={12} md={6} Lg={4} xl={3}>
                
                <Card>
                        <img className={classes.cardImageStyle}
                            src={demo4}
                            alt="Card Image"
                        />

                        <div className="mt-4 pl-2 mb-2 flex justify-between ">
                        <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0">AERO 15 OLED (Intel 11th Gen)</p>
                        <p className="text-lg text-gray-800 mt-2">$1940</p>
                        
                        </div>

                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faHeart} />
                        
                        </div>
                        
                        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        
                        <FontAwesomeIcon icon={faShoppingCart} />
                        
                        </div>
                    </div>
                </Card>
                
            </Col>
            </Row>
            </div>
    
    )
}

export default Productcard;

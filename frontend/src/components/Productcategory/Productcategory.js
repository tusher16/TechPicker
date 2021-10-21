import React from 'react';
import classes from './Productcategory.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import Card from "@material-tailwind/react/Card";

import demo1 from '../../assets/images/AORUS3080Ti12G.png';
import demo2 from '../../assets/images/HeadPhone.png';
import demo3 from '../../assets/images/KeyBoard_mouse.png';
import demo4 from '../../assets/images/laptop.png';
import Button from '@material-tailwind/react/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Productcategory() {
    
    return (
        
        <div>
           
                <Row className={classes.GridRowStyle}>
                    <Col className={classes.GridColStyle}>
                        
                    <div className="py-10">
                                    <div className="w-full py-10 px-20 w-2/3 bg-green-300 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            <Col>
                                
                                            <div className="">
                                                <h1 className=" font-medium text-black text-xl tracking-wide">Workcation</h1>
                                                <h2 className="font-normal tracking-wide text-2xl text-black lg:w-2/5">Workflow has completely transformed</h2>
                                                <div className="flex flex-col">
                                                    <backquotes className="font-normal text-black text-sm tracking-wider">Marie Chivers </backquotes>
                                                    <backqoutes className="font-normal text-black text-sm tracking-wider">CEO Workcation</backqoutes>
                                                </div>
                                            </div>
                                        
                                    

                            </Col>
                            <Col>
                                <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
                                <img className={classes.GridImageStyle}
                                src={demo2}
                                alt="Card Image"
                                />
                                </div>
                            </Col>
                            
                            
                        </Row> 
                             
                        </div>
                        </div>
                    </Col>

                    <Col className={classes.GridColStyle}>
                    <div className="py-10">
                                    <div className="w-full py-10 px-20 w-2/3 bg-purple-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            <Col>
                                
                                            <div className="">
                                                <h1 className=" font-medium text-white text-xl tracking-wide">Workcation</h1>
                                                <h2 className="font-normal tracking-wide text-2xl text-white lg:w-2/5">Workflow has completely transformed</h2>
                                                <div className="flex flex-col">
                                                    <backquotes className="font-normal text-white text-sm tracking-wider">Marie Chivers </backquotes>
                                                    <backqoutes className="font-normal text-white text-sm tracking-wider">CEO Workcation</backqoutes>
                                                </div>
                                            </div>
                                        
                                    

                            </Col>
                            <Col>
                            <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
                                <img className={classes.GridImageStyle}
                                src={demo3}
                                alt="Card Image"
                                />
                                </div>
                            </Col>
                            
                            
                        </Row> 
                             
                        </div>
                        </div>
                        </Col>

                        
                    
                    
                </Row>

               

            </div>

        
    )
}

export default Productcategory;

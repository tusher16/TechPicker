import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import classes from './BrandLogos.module.css';

import demo2 from '../../assets/images/aorus-logo.png';
import demo3 from '../../assets/images/corsair-logo-vector-svg.png';

function BrandLogos() {
    return (
        <div>
           
                <Row className={classes.GridRowStyle}>

                <div className="w-full text-center pb-1 py-20">
                    
                
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
                    Our Brands
                    </h1>

                    
                </div>

                    
                    <Col className={classes.GridColStyle}>   
                    <div className="py-10">
                        <div className="w-full py-10 px-20 w-2/3 bg-gray-100	 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            
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
                        <div className="w-full py-10 px-20 w-2/3 bg-gray-100 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            
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

                    <Col className={classes.GridColStyle}>   
                    <div className="py-10">
                        <div className="w-full py-10 px-20 w-2/3 bg-gray-100	 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            
                            <Col>
                                <div class="bg-auto md:bg-contain transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
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
                        <div className="w-full py-10 px-20 w-2/3 bg-gray-100	 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            
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
                        <div className="w-full py-10 px-20 w-2/3 bg-gray-100	 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">        
                        <Row>
                        
                            
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

                        
                    
                    
                </Row>

               

            </div>
    )
}

export default BrandLogos

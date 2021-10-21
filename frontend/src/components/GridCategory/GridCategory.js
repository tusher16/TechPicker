import React from 'react';
import classes from './GridCategory.module.css';
import { Row, Col, Container } from 'react-bootstrap';

import W1 from '../../assets/images/W1.png';
import W2 from '../../assets/images/W2.png';
import W3 from '../../assets/images/W3.png';
import W4 from '../../assets/images/W4.png';
import W5 from '../../assets/images/W5.png';
import W6 from '../../assets/images/W6.png';
import W7 from '../../assets/images/W7.png';
import W8 from '../../assets/images/W8.png';

function GridCategory() {
    
    return (
        
        <Container className={classes.GridContainerStyle}>
           
                <Row className={classes.GridRowStyle}>
                    <Col className={classes.GridColStyle}>
                        <Row className={classes.GridRowStyle}><img  className={classes.GridImageStyle} src={W1}  /></Row>
                        <Row className={classes.GridRowStyle}><img  className={classes.GridImageStyle} src={W2}  /></Row>
                    </Col>
                    
                    <Col className={classes.GridColStyle}>
                        <Row className={classes.GridRowStyle}>
                        <Col className={classes.GridColStyle}><img  className={classes.GridImageStyle} src={W3}  /> </Col>
                        <Col className={classes.GridColStyle}><img  className={classes.GridImageStyle} src={W4}  /> </Col>
                        </Row>
                    </Col>
                </Row>
            

                <Row>
                    <Col className={classes.GridColStyle} >
                        <Row className={classes.GridRowStyle}>
                        <Col  className={classes.GridColStyle}><img  className={classes.GridImageStyle} src={W5}  /> </Col>
                        <Col  className={classes.GridColStyle}><img  className={classes.GridImageStyle} src={W6}  /> </Col>
                        </Row>
                    </Col>
                    
                    <Col className={classes.GridColStyle} >
                        <Row className={classes.GridRowStyle}><img  className={classes.GridImageStyle} src={W7}  /></Row>
                        <Row className={classes.GridRowStyle}><img  className={classes.GridImageStyle} src={W8}  /></Row>
                    </Col>
                    
                    
                </Row>
            
        </Container>
    )
}

export default GridCategory;

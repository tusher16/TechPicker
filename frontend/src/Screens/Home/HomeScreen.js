import React from 'react';
import Slider  from '../../components/Slider/Slider';
import GridCategory from '../../components/GridCategory/GridCategory';
import classes from './HomeScreen.module.css';
import Productcard from '../../components/ProductCard/Productcard';
import Productcategory from '../../components/Productcategory/Productcategory';
import Testimonials from '../../components/testimonials/Testimonials';
import { Container } from 'react-bootstrap';
import BrandLogos from '../../components/BrandLogos/BrandLogos';



function HomeScreen() {
    return (
        <div className={classes.bodystyle}>
            <Slider />
            <GridCategory />
            
            <Container>
            <Productcard />
            <Productcategory />
            <Testimonials />
            <BrandLogos />
            </Container>

            
        </div>
    )
}

export default HomeScreen

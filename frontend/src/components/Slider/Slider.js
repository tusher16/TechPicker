import React from 'react';
import 'antd/dist/antd.css';

import classes from './Slider.module.css';

import { Carousel, Radio } from 'antd';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import slider_file_01 from '../../assets/images/slider_01.png';
import slider_file_02 from '../../assets/images/slider_02.png';


const Slider = () => {
  const [dotPosition, setDotPosition] = React.useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    
    <Container>
      <Radio.Group onChange={handlePositionChange} value={dotPosition}>
       
      </Radio.Group>
      <Carousel autoplay dotPosition={'left'} className={classes.sliderStyle}>
        <div>
          <img className={classes.sliderImageStyle} src={slider_file_01} alt="slider01" fluid />
        </div>
        
        <div>
          <img className={classes.sliderImageStyle} src={slider_file_02} alt="slider02" fluid />
        </div>

        <div>
          <img className={classes.sliderImageStyle} src={slider_file_01} alt="slider01" fluid />
        </div>
        
      </Carousel>
      </Container>
    
  );
};

export default Slider;
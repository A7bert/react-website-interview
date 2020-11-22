import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import SwiftSlider from 'react-swift-slider'

const images = [
  {'id': '1','src': 'images/banner1.jpg'},
  {'id': '2','src': 'images/banner2.jpg'},
];

const sliderStyle = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: '-1'
};

function HeroSection() {
  return (
    <div className='hero-container'>
      <SwiftSlider data={images} style={sliderStyle} />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

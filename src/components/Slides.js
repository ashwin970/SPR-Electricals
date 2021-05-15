/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../media/slideimages/img-1.png';
import slide2 from '../media/slideimages/img-2.png';
import slide3 from '../media/slideimages/img-3.png';

const Slides=()=>{
    return(
        <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container1">
              <img src={slide1} className="img"/>
            </div>
            <h2>First Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container2">
              <img src={slide2} className="img" />
            </div>
            <h2>Second Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container3">
              <img src={slide3} className="img"/>
            </div>
            <h2>Third Slide</h2>
          </div>
        </Fade>
      </div>
    );
}

export default Slides;
import './Slide.scss';
import React from 'react';
import Slider from 'infinite-react-carousel';
import CatCaard from '../catCard/CatCaard';

import cards from '../../data.jsx';




function Slide({children,slidesToShow,arrowsScroll}) {
  return (
    <div className='slide'>
        <div className="container">
        <Slider dots slidesToShow	={slidesToShow} arrowsScroll={arrowsScroll}>
     
            {
              children
            }
          
        </Slider>
        </div>
    </div>
  )
}

export default Slide
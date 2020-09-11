import React from "react";
import Slider from "react-slick";
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import "slick-carousel/slick/slick.css";
import './Slider.css'

 
function ImagesSlider() {
    const settings = {
      arrows: true,
      prevArrow: <ArrowBackIos/>,
      nextArrow: <ArrowForwardIos/>,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <>
      <Slider {...settings}>
        <div className='sliderImage-container'>
          <img className='sliderImage' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt="toys&games"/>
        </div>
        <div className='sliderImage-container'>
          <img className='sliderImage' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" alt="beauty"/>
        </div>
        <div className='sliderImage-container'>
          <img className='sliderImage' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="ship"/>
        </div>
        <div className='sliderImage-container'>
          <img className='sliderImage' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="computers&accessories"/>
        </div>
        <div className='sliderImage-container'>
          <img className='sliderImage' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" alt="shop-local"/>
        </div>
        <div className='sliderImage-container'>
          <img className='sliderImage' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" alt="sports&outdoor"/>
        </div>
      </Slider>
      </>
    );
  }

  export default ImagesSlider

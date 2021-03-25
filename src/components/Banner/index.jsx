import React from 'react'
import Slider from 'react-slick';
import Slide1 from "../../img_local/banner1.jpg"
import Slide2 from "../../img_local/banner2.jpg"
import Slide3 from "../../img_local/banner3.jpg"
import ArrowSlide from '../ArrowSlide';
import SliderWrapper from './SliderWrapper'
import './index.scss'
function Banner() {
    const initialImage = [
        Slide1,
        Slide2,
        Slide3
    ]
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        speed: 1000,
        prevArrow : <ArrowSlide to="prev" />,
        nextArrow : <ArrowSlide to="next" />,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
          <div className="ft-slick__dots--custom">
              {/* <div className="loading-item" /> */}
          </div>
        )
    };
    return (
        <div className="banner">
            <div className="container">
                <SliderWrapper>
                    <Slider
                        { ...settings }
                    >
                        { initialImage.map((item,index) => (
                            <div className="slide-img" key={ index }>
                                <img src={ item } alt={ index } style={{ maxWidth : "100%" }}/>
                            </div>
                        ))}
                    </Slider>
                </SliderWrapper>
            </div>
        </div>
    )
}

export default Banner

import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Slider from "react-slick";

function WorkProvide() {
  var settings = {
    slidesToShow: 7,
    slidesToScroll: 1,

    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    centerPadding: "80px",
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='work-slider'>
      <Slider {...settings}>
        <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Warehousing</h3>
        </div>
        <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Manufacturing</h3>
        </div> <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Food & Beverage</h3>
        </div> <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Hospitality</h3>
        </div> <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Restaurants</h3>
        </div> <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Event Services</h3>
        </div> <div>
          <Image src={require('../assets/images/work/s1.png')} className="img-fluid" alt="" />
          <h3>Event Services</h3>
        </div>

      </Slider>
    </div>
  )
}

export default WorkProvide

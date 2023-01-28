
import React, { useEffect, useRef,useState } from "react";
import Slider from "react-slick";


import '../../index.css'
const Section_5 = () => {
  const sliderRef = useRef(null);
  const [slideToShow, setSlideToShow] = useState(3);

  useEffect(() => {
    let currentSlide = 0;
    const slider = sliderRef.current;

    setInterval(() => {
      currentSlide = (currentSlide + 1) % 4; // assuming there are 3 slides

      
    }, 100);

    
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000 && window.innerWidth >= 500) {
        setSlideToShow(2);
      } else if (window.innerWidth < 500) {
        setSlideToShow(1);
      } else {
        setSlideToShow(3);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    swipeToSlide:true,
    
  };


  return (
    <div className="testimonials xs:w-[100%] md:w-[100%] xl:w-[80%]  h-[500px]  m-auto  ">
      <h2>Testimonials</h2>
      <p>What our client's say about us</p>
      <Slider  ref={sliderRef} {...settings}>
        
        <div style={{display:"flex", gap:"5rem"}}>
        <div className="card ">
          
        </div>
        </div>
        <div style={{display:"flex", gap:"5rem"}}>
        <div className="card ">
          
        </div>
        </div>
        <div style={{display:"flex", gap:"5rem"}}>
        <div className="card  ">
          
        </div>
        </div>
        <div style={{display:"flex", gap:"5rem"}}>
        <div className="card ">
          
        </div>
        </div>
       
       
      </Slider>
    </div>
    );
}

export default Section_5

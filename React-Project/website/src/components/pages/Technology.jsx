import React, { useState, useEffect } from 'react';
const Technology = ({technology})=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentIndex(currentIndex + 1 % technology.length);
        },5000);
        return () => clearInterval(intervalId);

    },[currentIndex,technology]);
    const currentTechnology = technology[currentIndex];
    return(
        <div className="image-slider-container">
      <img src={currentTechnology} alt="slider-img" />
    </div>
    );
}

export default Technology;
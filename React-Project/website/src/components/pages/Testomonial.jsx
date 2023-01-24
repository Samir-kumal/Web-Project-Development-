// import React, { useState, useEffect } from 'react';

// const Testimonial = ({ testimonials }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex, testimonials]);

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <div className="testimonial-container">
//       <div className="testimonial-text">
//         <p>{currentTestimonial.text}fdsaasf</p>
//         <p>- {currentTestimonial.author}fdasfafas</p>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

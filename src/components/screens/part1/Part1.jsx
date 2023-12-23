// import React, { useEffect, useState } from 'react';
// import './Part1.css';

// function Part1() {
//   const [isAnimated, setIsAnimated] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       // You can adjust the scroll threshold as needed
//       const threshold = 200;

//       if (scrollPosition > threshold) {
//         setIsAnimated(true);
//       } else {
//         setIsAnimated(false);
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`hero-content ${isAnimated ? 'animate' : ''}`}>
//       <div className="left">
//         <img className="hero-img" src="./images/3.gif" alt="Hero Image" />
//       </div>

//       <div className="right">
//         <h1>Welcome to NorthCloud</h1>
//         <h2>Your Hi-Tech Solution Provider</h2>
//       </div>
//     </div>
//   );
// }

// export default Part1;
import React, { useEffect, useState } from 'react';
import './Part1.css';

function Part1() {
  const [scrollValues, setScrollValues] = useState({ perspective: 1000, rotationY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const perspectiveFactor = 1

      ; // Adjust the perspective factor based on your preference
      const rotationFactor = 0.1; // Adjust the rotation factor based on your preference

      // Calculate perspective and rotation based on the scroll position
      const perspective = 1000 + scrollPosition / perspectiveFactor;
      const rotationY = 0 + scrollPosition * rotationFactor;

      setScrollValues({ perspective, rotationY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-content" style={{ transform: `perspective(${scrollValues.perspective}px) rotateY(${scrollValues.rotationY}deg)` }}>
      <div className="left">
        <img className="hero-img" src="./images/3.gif" alt="Hero Image" />
      </div>

      <div className="right">
        <h1>Welcome to NorthCloud</h1>
        <h2>Your Hi-Tech Solution Provider</h2>
      </div>
    </div>
  );
}

export default Part1;

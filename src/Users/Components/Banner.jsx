// Banner.js
// import React from 'react';
// import image from '../../images/Hero-banner.jpg';
// import image2 from '../../images/banner.jpg';
// import image3 from '../../images/Another.jpg';
// import image5 from '../../images/anotherone.jpg';
// const Banner = () => {
//   return (
//     <div className="relative" style={{ height: '100vh', zIndex: -1 }}>
//       <div className="absolute inset-0 flex items-center justify-center flex-col">
//         <h1 className="text-white text-5xl font-black p-2 font-serif ">Discover Your Style</h1>
//         <p className='text-white font-semibold  '> Keep the vibe going from head to toe with our selection of casual shoes, hats, belts, and other accessories. </p>
//       </div>
//       <img src={image5} className="w-full h-full object-cover" alt="Banner" />
//     </div>
//   );
// }

// export default Banner;
import React from "react";

import image5 from "../../images/banner2.jpg";

const Banner = () => {
  return (
    <div className="relative" style={{ height: "100vh", zIndex: -1 }}>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-white text-5xl font-black p-2 font-serif z-10">
          Discover Your Style
        </h1>
        <p className="text-white font-semibold z-10">
          Keep the vibe going from head to toe with our selection of casual
          shoes, hats, belts, and other accessories.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img src={image5} className="w-full h-full object-cover" alt="Banner" />
    </div>
  );
};

export default Banner;

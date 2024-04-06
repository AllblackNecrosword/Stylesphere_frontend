
// import React from "react";

// import image5 from "../../images/banner2.jpg";

// const Banner = () => {
//   return (
//     <div className="relative" style={{ height: "100vh", zIndex: -1 }}>
//       <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
//         <h1 className="text-white text-4xl font-black p-2 font-serif md:text-6xl lg:text-5xl">
//           Discover Your Style
//         </h1>
//         <p className="text-white font-semibold text-sm  md:text-xl lg:text-xl mt-2">
//           Keep the vibe going from head to toe with our selection of casual
//           shoes, hats, belts, and other accessories.
//         </p>
//       </div>
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       <img src={image5} className="w-full h-full object-cover" alt="Banner" />
//     </div>
//   );
// };

// export default Banner;
import React, { useState, useEffect } from "react";

import image5 from "../../images/banner2.jpg";
import image6 from "../../images/banner.jpg"; // Add another image

const Banner = () => {
  const images = [
    {
      src: image5,
      title: "Discover Your Style",
      description:
        "Keep the vibe going from head to toe with our selection of casual shoes, hats, belts, and other accessories.",
    },
    {
      src: image6,
      title: "Elevate Your Wardrobe",
      description: "Step up your fashion game with our curated collection of trendy clothing, shoes, and accessories. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const { src, title, description } = images[currentIndex];

  return (
    <div className="relative" style={{ height: "100vh", zIndex: -1 }}>
      <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
        <h1 className="text-white text-4xl font-black p-2 font-serif md:text-6xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-white font-semibold text-sm  md:text-xl lg:text-xl mt-2">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <img src={src} className="w-full h-full object-cover" alt="Banner" />
    </div>
  );
};

export default Banner;
import React, { useState, useEffect } from "react";
import image5 from "../../images/banner2.jpg";
import image6 from "../../images/banner.jpg"; // Add another image
import { FaCircleArrowUp } from "react-icons/fa6";

const Banner = () => {
  const [bannerdata, setBannerdata] = useState([]);

  const Herosection = async () => {
    const response = await fetch(" http://localhost:4000/content");
    if (!response.ok) {
      console.log(error);
    }
    const result = await response.json();
    const resultArray = Object.values(result); // Adjust based on your scenario
    setBannerdata(resultArray);
    // setBannerdata(result);
  };

  useEffect(() => {
    Herosection();
  }, []);
  console.log("banner", bannerdata);
  const images = [
    {
      src: bannerdata[2],
      title: bannerdata[1],
      description:
        "Keep the vibe going from head to toe with our selection of casual shoes, hats, belts, and other accessories.",
    },
    {
      src: bannerdata[5],
      title: bannerdata[4],
      description:
        "Step up your fashion game with our curated collection of trendy clothing, shoes, and accessories. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const { src, title, description } = images[currentIndex];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        // Adjust the threshold as needed
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  return (
    <>
      <div className="relative" style={{ height: "100vh", zIndex: 0 }}>
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
      {showButton && (
        <div className="flex justify-end fixed bottom-8 right-20 p-4 z-20">
          <button
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={scrollToTop}
          >
            <FaCircleArrowUp size={34} />
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;

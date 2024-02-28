import React, { useState, useEffect } from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../../images/SS-black.png";
import WhiteLogo from "../../images/SS-white.png";
import Search from "../Components/Search";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsSticky(false); // Reset to default state when not on homepage
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Function to determine styles based on route
  const getNavbarStyles = () => {
    if (location.pathname === "/") {
      return {
        background: isSticky ? "white" : "transparent",
        color: isSticky ? "#565656" : "white",
        borderBottom: isSticky ? "2px solid #E7E7E7" : "none",
      };
    } else {
      return {
        background: "white",
        color: "black",
        borderBottom: "2px solid #E7E7E7",
      };
    }
  };

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-10 transition-all"
        style={getNavbarStyles()}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex flex-shrink-0">
              <Link to={"/"}>
                {/* <IoLogoPlaystation size={48} /> */}
                {/* {
                  isSticky ? 
                  <img src={BlackLogo} alt="logo" className="w-6 h-auto"/>:
                  <img src={WhiteLogo} alt="logo" className="w-6 h-auto"/>
                } */}
                {/* Conditionally render the black logo when on a path other than '/' */}
                {location.pathname === "/" ? (
                  isSticky ? (
                    <img src={BlackLogo} alt="logo" className="w-5 h-auto" />
                  ) : (
                    <img src={WhiteLogo} alt="logo" className="w-5 h-auto" />
                  )
                ) : (
                  <img src={BlackLogo} alt="logo" className="w-5 h-auto" />
                )}
              </Link>
            </div>
            <div className="flex justify-center flex-grow">
              <div className="flex space-x-6 ">
                <Link
                  to={"/"}
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-extrabold border-b-2 border-transparent"
                >
                  HOME
                </Link>
                <Link
                  to={"/men"}
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-extrabold border-b-2 border-transparent"
                >
                  MEN
                </Link>
                <Link
                  to={"/women"}
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-extrabold border-b-2 border-transparent"
                >
                  WOMEN
                </Link>
                <Link
                  to={"/kids"}
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-extrabold border-b-2 border-transparent"
                >
                  KIDS
                </Link>
                <Link
                  to={"kids"}
                  href="#"
                  className="px-3 py-2 rounded-md text-base font-extrabold border-b-2 border-transparent"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Search Input and Icons */}
            <div className="flex items-center">
              {/* Search Input */}

              <Link
                to={"/"}
                onClick={toggleSearch}
                className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
              >
                <IoSearchOutline size={24} />
              </Link>

              {/* Favorite Icon */}
              <Link
                to={"/wishlist"}
                className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
              >
                <MdOutlineFavoriteBorder size={24} />
              </Link>

              {/* Cart Icon */}
              <Link
                to={"/cart"}
                className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
              >
                <MdOutlineShoppingCart size={24} />
              </Link>

              {/* Profile button */}
              <Link
                to="/login"
                className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
              >
                <FaRegUser size={22} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {isSearchOpen && <Search onClose={toggleSearch} />}
    </>
  );
};

export default Navbar;

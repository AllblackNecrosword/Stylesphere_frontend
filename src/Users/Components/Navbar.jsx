// import React, { useState, useEffect } from "react";
// import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import { IoLogoPlaystation } from "react-icons/io5";
// import { IoSearchOutline } from "react-icons/io5";
// import { Link, useLocation } from "react-router-dom";
// import BlackLogo from "../../images/SS-black.png";
// import WhiteLogo from "../../images/SS-white.png";
// import Search from "../Components/Search";
// import { userAuth } from "../../auth/userAuth";
// import { FaUserCircle } from "react-icons/fa";
// import { FaCaretDown } from "react-icons/fa";

// const Navbar = ({ cartdata, favdata }) => {
//   const { token, user, Logout, auth } = userAuth();
//   const [isSticky, setIsSticky] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handledropdown = () => {
//     setShowDropdown( !showDropdown);
//   };

//   const location = useLocation();
//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 50) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     if (location.pathname === "/") {
//       window.addEventListener("scroll", handleScroll);
//     } else {
//       setIsSticky(false);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [location]);

//   // Function to determine styles based on route
//   const getNavbarStyles = () => {
//     if (location.pathname === "/") {
//       return {
//         background: isSticky ? "white" : "transparent",
//         color: isSticky ? "#565656" : "white",
//         borderBottom: isSticky ? "2px solid #E7E7E7" : "none",
//       };
//     } else {
//       return {
//         background: "white",
//         color: "black",
//         borderBottom: "2px solid #E7E7E7",
//       };
//     }
//   };

//   return (
//     <>
//       <nav
//         className="fixed inset-x-0 top-0 z-10 transition-all"
//         style={getNavbarStyles()}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 ">
//             {/* Logo */}
//             <div className="flex flex-shrink-0">
//               <Link to={"/"}>
//                 {/* <IoLogoPlaystation size={48} /> */}
//                 {/* {
//                   isSticky ? 
//                   <img src={BlackLogo} alt="logo" className="w-6 h-auto"/>:
//                   <img src={WhiteLogo} alt="logo" className="w-6 h-auto"/>
//                 } */}
//                 {/* Conditionally render the black logo when on a path other than '/' */}
//                 {location.pathname === "/" ? (
//                   isSticky ? (
//                     <img src={BlackLogo} alt="logo" className="w-5 h-auto" />
//                   ) : (
//                     <img src={WhiteLogo} alt="logo" className="w-5 h-auto" />
//                   )
//                 ) : (
//                   <img src={BlackLogo} alt="logo" className="w-5 h-auto" />
//                 )}
//               </Link>
//             </div>
//             <div className="hidden md:flex md:items-center md:space-x-8">
//               <div className="flex md:space-x-8">
//                 <Link
//                   to={"/"}
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
//                 >
//                   HOME
//                 </Link>
//                 <Link
//                   to={"/men"}
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
//                 >
//                   MEN
//                 </Link>
//                 <Link
//                   to={"/women"}
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
//                 >
//                   WOMEN
//                 </Link>
//                 <Link
//                   to={"/kids"}
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
//                 >
//                   KIDS
//                 </Link>
//                 <Link
//                   to={"/contact"}
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
//                 >
//                   CONTACT
//                 </Link>
//               </div>
//             </div>

//             {/* Search Input and Icons */}
//             <div className="flex items-center">
//               <Link
//                 // to={"/"}
//                 onClick={toggleSearch}
//                 className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
//               >
//                 <IoSearchOutline size={24} />
//               </Link>
//               {/* Render Dashboard button if auth is Admin */}
//               {auth === "Admin" ? (
//                 <Link to="/dashboard">
//                   <button className="bg-blue-500 p-2 text-white font-semibold rounded-lg">
//                     Dashboard
//                   </button>
//                 </Link>
//               ) : (
//                 <>
//                   {/* Render Wishlist Icon */}
//                   <Link
//                     to={"/wishlist"}
//                     className="text-back hover:text-stone-500 focus:outline-none px-4 py-2 relative"
//                   >
//                     <MdOutlineFavoriteBorder size={24} />
//                     {favdata > 0 && (
//                       <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         {favdata}
//                       </div>
//                     )}
//                   </Link>

//                   {/* Render Cart Icon */}
//                   <Link
//                     to={"/cart"}
//                     className="text-back hover:text-stone-500 focus:outline-none px-4 py-2 relative"
//                   >
//                     <MdOutlineShoppingCart size={24} />
//                     {/* Display cart item count in a circle */}
//                     {cartdata > 0 && (
//                       <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         {cartdata}
//                       </div>
//                     )}
//                   </Link>

//                   {/* Render Profile Icons */}
//                   {token ? (
//                     // <div className="relative">
//                     //   <div className="hover:text-stone-500 focus:outline-none px-4 py-2">
//                     //     <FaRegUser size={22} onClick={handledropdown} />
//                     //   </div>
//                     //   {showDropdown && (
//                     //     <ul className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md">
//                     //       <Link to={'/profile'}>
//                     //       <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
//                     //         Profile
//                     //       </li>
//                     //       </Link>
//                     //       <li
//                     //         className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
//                     //         onClick={Logout}
//                     //       >
//                     //         Logout
//                     //       </li>
//                     //     </ul>
//                     //   )}
//                     // </div>
//                     <div className="relative">
//                       {/* Profile section */}
//                       <div className="flex items-center">
//                         {/* Dropdown button */}
//                         <div className="relative">
//                           {/* Dropdown trigger */}
//                           <button
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             className="focus:outline-none"
//                           >
//                             {/* Icon and username */}
//                             <div className="flex items-center gap-2">
//                               <FaUserCircle
//                                 size={26}
//                                 className="text-blue-600"
//                               />
//                               {/* Placeholder username, replace with actual username */}
//                               <p className="">{user}</p> <FaCaretDown />
//                             </div>
//                           </button>

//                           {/* Dropdown menu */}
//                           {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
//                               <ul className="py-1">
//                                 {/* Menu items */}
//                                 <li className="hover:bg-gray-100">
//                                   <Link
//                                     to="/UserProfile"
//                                     className="block px-4 py-2 text-gray-800"
//                                   >
//                                     Profile
//                                   </Link>
//                                 </li>
//                                 <li className="hover:bg-gray-100">
//                                   <Link
//                                     to="/MyOrders"
//                                     className="block px-4 py-2 text-gray-800"
//                                   >
//                                     My Order
//                                   </Link>
//                                 </li>

//                                 <li className="hover:bg-gray-100">
//                                   <Link
//                                     to="/Notification"
//                                     className="block px-4 py-2 text-gray-800"
//                                   >
//                                     Notification
//                                   </Link>
//                                 </li>
//                                 <li className="hover:bg-gray-100">
//                                   {/* Logout action */}
//                                   <p
//                                     onClick={Logout}
//                                     className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-red-600 hover:text-white"
//                                   >
//                                     Log out
//                                   </p>
//                                 </li>
//                               </ul>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     // Render Sign In Link if user is not authenticated
//                     <Link
//                       to="/login"
//                       className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
//                     >
//                       <h1>Sign In</h1>
//                     </Link>
//                   )}
//                 </>
//               )}
//             </div>

//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-back hover:text-stone-500 focus:outline-none"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="h-6 w-6"
//                 >
//                   {menuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {isSearchOpen && (
//         <Search
//           onClose={toggleSearch}
//           className="md:hidden mt-4"
//           inputClassName="block w-full p-4 pl-10 appearance-none leading-tight focus:bg-white focus:border-gray-500 outline-none md:w-1/2"
//         />
//       )}
//       {isSearchOpen && (
//         <div
//           className={`md:hidden fixed bottom-0 left-0 right-0 top-16 z-10 ${
//             menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//           } transition-all duration-300`}
//         >
//           {/* Add any other elements you want to show on the mobile search overlay */}
//         </div>
//       )}
//       {menuOpen && (
//         <div
//           className="md:hidden fixed top-16 left-0 w-full h-full z-10 bg-gray-500 opacity-70"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//       {menuOpen && (
//         <div
//           className="md:hidden fixed bottom-0 left-0 right-0 top-16 z-10"
//           id="mobileMenu"
//         >
//           <div
//             className="flex flex-col space-y-6 bg-white shadow-xl text-center pb-4 "
//             onClick={() => setMenuOpen(false)}
//           >
//             <Link
//               to={"/"}
//               className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
//               onClick={toggleMenu}
//             >
//               HOME
//             </Link>
//             <Link
//               to={"/men"}
//               className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
//               onClick={toggleMenu}
//             >
//               MEN
//             </Link>
//             <Link
//               to={"/women"}
//               className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
//               onClick={toggleMenu}
//             >
//               WOMEN
//             </Link>
//             <Link
//               to={"/kids"}
//               className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
//               onClick={toggleMenu}
//             >
//               KIDS
//             </Link>
//             <Link
//               to={"/contact"}
//               className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
//               onClick={toggleMenu}
//             >
//               CONTACT
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "../../images/SS-black.png";
import WhiteLogo from "../../images/SS-white.png";
import Search from "../Components/Search";
import { userAuth } from "../../auth/userAuth";
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Home from "../Pages/Home";
import OrderHistory from "../Pages/OrderHistory";

const Navbar = ({ cartdata, favdata }) => {
  const { token, user, Logout, auth } = userAuth();
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Define isDropdownOpen state

  const handledropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      setIsSticky(false);
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
          <div className="flex items-center justify-between h-16 ">
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
            <div className="hidden md:flex md:items-center md:space-x-8">
              <div className="flex md:space-x-8">
                <Link
                  to={"/"}
                  href="#"
                  className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
                >
                  HOME
                </Link>
                <Link
                  to={"/men"}
                  href="#"
                  className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
                >
                  MEN
                </Link>
                <Link
                  to={"/women"}
                  href="#"
                  className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
                >
                  WOMEN
                </Link>
                <Link
                  to={"/kids"}
                  href="#"
                  className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
                >
                  KIDS
                </Link>
                <Link
                  to={"/contact"}
                  href="#"
                  className="px-3 py-2 font-bold rounded-md text-base border-b-2 border-transparent"
                >
                  RETURN
                </Link>
              </div>
            </div>

            {/* Search Input and Icons */}
            <div className="flex items-center text-center">
              <Link
                // to={"/"}
                onClick={toggleSearch}
                className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
              >
                <IoSearchOutline size={24} />
              </Link>
              {/* Render Dashboard button if auth is Admin */}
              {auth === "Admin" ? (
                <Link to="/dashboard">
                  <button className="bg-blue-500 p-2 text-white font-semibold rounded-lg">
                    Dashboard
                  </button>
                </Link>
              ) : (
                <>
                  {/* Render Wishlist Icon */}
                  <Link
                    to={"/wishlist"}
                    className="text-back hover:text-stone-500 focus:outline-none px-4 py-2 relative"
                  >
                    <MdOutlineFavoriteBorder size={24} />
                    {favdata > 0 && (
                      <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {favdata}
                      </div>
                    )}
                  </Link>

                  {/* Render Cart Icon */}
                  <Link
                    to={"/cart"}
                    className="text-back hover:text-stone-500 focus:outline-none px-4 py-2 relative"
                  >
                    <MdOutlineShoppingCart size={24} />
                    {/* Display cart item count in a circle */}
                    {cartdata > 0 && (
                      <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartdata}
                      </div>
                    )}
                  </Link>

                  {/* Render Profile Icons */}
                  {token ? (
                    // <div className="relative">
                    //   <div className="hover:text-stone-500 focus:outline-none px-4 py-2">
                    //     <FaRegUser size={22} onClick={handledropdown} />
                    //   </div>
                    //   {showDropdown && (
                    //     <ul className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md">
                    //       <Link to={'/profile'}>
                    //       <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    //         Profile
                    //       </li>
                    //       </Link>
                    //       <li
                    //         className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    //         onClick={Logout}
                    //       >
                    //         Logout
                    //       </li>
                    //     </ul>
                    //   )}
                    // </div>
                    <div className="relative ">
                      {/* Profile section */}
                      <div className="flex items-center">
                        {/* Dropdown button */}
                        <div className="relative">
                          {/* Dropdown trigger */}
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="focus:outline-none"
                          >
                            {/* Icon and username */}
                            <div className="flex  gap-2">
                              <FaUserCircle
                                size={24}
                                className="text-blue-600"
                              />
                              {/* Placeholder username, replace with actual username */}
                              {/* <p className="">{user}</p> <FaCaretDown /> */}
                              <p className="items-center"></p> <FaCaretDown />
                            </div>
                          </button>

                          {/* Dropdown menu */}
                          {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                              <ul className="py-1">
                                {/* Menu items */}
                                <li className="hover:bg-gray-100">
                                  <Link
                                    to={'/profile'}
                                    className="block px-4 py-2 text-gray-800"
                                  >
                                    Profile
                                  </Link>
                                </li>
                                {/* <li className="hover:bg-gray-100">
                                  <Link
                                    to={'/order'}
                                    className="block px-4 py-2 text-gray-800"
                                  >
                                    My Order
                                  </Link>
                                </li> */}

                                {/* <li className="hover:bg-gray-100">
                                  <Link
                                    to="/Notification"
                                    className="block px-4 py-2 text-gray-800"
                                  >
                                    Notification
                                  </Link>
                                </li> */}
                                <li className="hover:bg-gray-100">
                                  {/* Logout action */}
                                  <p
                                    onClick={Logout}
                                    className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-red-600 hover:text-white"
                                  >
                                    Log out
                                  </p>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Render Sign In Link if user is not authenticated
                    <Link
                      to="/login"
                      className="text-back hover:text-stone-500 focus:outline-none px-4 py-2"
                    >
                      <h1>Sign In</h1>
                    </Link>
                  )}
                </>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-back hover:text-stone-500 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isSearchOpen && (
        <Search
          onClose={toggleSearch}
          className="md:hidden mt-4"
          inputClassName="block w-full p-4 pl-10 appearance-none leading-tight focus:bg-white focus:border-gray-500 outline-none md:w-1/2"
        />
      )}
      {isSearchOpen && (
        <div
          className={`md:hidden fixed bottom-0 left-0 right-0 top-16 z-10 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-all duration-300`}
        >
          {/* Add any other elements you want to show on the mobile search overlay */}
        </div>
      )}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 w-full h-full z-10 bg-gray-500 opacity-70"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {menuOpen && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 top-16 z-10"
          id="mobileMenu"
        >
          <div
            className="flex flex-col space-y-6 bg-white shadow-xl text-center pb-4 "
            onClick={() => setMenuOpen(false)}
          >
            <Link
              to={"/"}
              className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              to={"/men"}
              className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
              onClick={toggleMenu}
            >
              MEN
            </Link>
            <Link
              to={"/women"}
              className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
              onClick={toggleMenu}
            >
              WOMEN
            </Link>
            <Link
              to={"/kids"}
              className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
              onClick={toggleMenu}
            >
              KIDS
            </Link>
            <Link
              to={"/contact"}
              className="px-4 py-1 rounded-md text-xl font-semibold border-b-2 border-transparent"
              onClick={toggleMenu}
            >
              RETURN
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Users/Components/Footer";
import Header from "./Users/Components/Header";
import Login from "./Users/Components/Login";
import Navbar from "./Users/Components/Navbar";
import Signup from "./Users/Components/Signup";
import Shopmen from "./Users/Pages/Shopmen";
import Shopwomen from "./Users/Pages/Shopwomen";
import Shopkids from "./Users/Pages/Shopkids";
import Addtocart from "./Users/Pages/Addtocart";
import Wishlist from "./Users/Pages/Wishlist";
import Contact from "./Users/Pages/Contact";
import Dashboard from "./Admin/Dashboard";
import Productpage from "./Users/Pages/Productpage";
import Userprovider from "./auth/userAuth";

function App() {
  return (
    <Userprovider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Userprovider>
  );
}

function AppContent() {
  const location = useLocation();
  const [cartdata, setCartdata] = useState([]);
  const [rating, setRating] = useState(0);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  //handle add to whishlist
  const addToFavorites = (product) => {
    // Add the product to the favorites list
    setFavoriteProducts([...favoriteProducts, product]);
  };
  //Handle add to cart
  const carthandler = (data) => {
    setCartdata([...cartdata, data]);
    console.log("Parent data", cartdata);
  };

  //Handle average rating display
  const handlerating = (value) => {
    setRating(value); // Update rating state directly
  };

  // Function to determine if Navbar and Footer should be shown
  const shouldShowNavbarAndFooter = () => {
    // Check if the current route starts with "/dashboard"
    return !location.pathname.startsWith("/dashboard");
  };

  return (
    <>
      {/* Conditional rendering for Navbar */}
      {shouldShowNavbarAndFooter() && <Navbar cartdata={cartdata.length}  favdata={favoriteProducts.length}/>}
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Addtocart cartdata={cartdata} />} />
        <Route
          path="/wishlist"
          element={<Wishlist favoriteProducts={favoriteProducts} />}
        />
        <Route path="/men" element={<Shopmen rating={rating} />} />
        <Route path="/women" element={<Shopwomen />} />
        <Route path="/kids" element={<Shopkids />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/ProductDetail/:id"
          element={
            <Productpage
              carthandler={carthandler}
              handlerating={handlerating}
              addToFavorites={addToFavorites}
            />
          } // Pass carthandler as prop
        />
      </Routes>
      {/* Conditional rendering for Footer */}
      {shouldShowNavbarAndFooter() && <Footer />}
    </>
  );
}

export default App;

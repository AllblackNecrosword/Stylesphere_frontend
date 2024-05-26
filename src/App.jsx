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
import ProtectedRoute from "./auth/ProtectedRoute";
import CartItems from "./Users/Pages/CartItems";
import Profile from "./Users/Pages/Profile";
import BotpressChatbot from "./BotpressChatbot";
import Payment from "./Users/Pages/Payment";
import ReturnOrder from "./Users/Pages/ReturnOrder";

function App() {
  return (
    <Userprovider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <BotpressChatbot/>
    </Userprovider>
  );
}

function AppContent() {
  const location = useLocation();
  const [cartdata, setCartdata] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);



//Passing the data from cart to checkout 



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

  // Function to determine if Navbar and Footer should be shown
  const shouldShowNavbarAndFooter = () => {
    // Check if the current route starts with "/dashboard"
    return !location.pathname.startsWith("/dashboard");
  };

  return (
    <>
      {/* Conditional rendering for Navbar */}
      {shouldShowNavbarAndFooter() && (
        <Navbar  />
      )}
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <ProtectedRoute path="/dashboard/*" element={<Dashboard />} /> */}
        <Route path="/dashboard/*" element={<ProtectedRoute />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/cart" element={<Addtocart cartdata={cartdata} />} /> */}
        <Route
          path="/wishlist"
          element={<Wishlist favoriteProducts={favoriteProducts} />}
        />
        <Route path="/men" element={<Shopmen />} />
        <Route path="/women" element={<Shopwomen />} />
        <Route path="/kids" element={<Shopkids />} />
        <Route path="/return" element={<ReturnOrder />} />
        <Route path="/cart" element={<CartItems/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        
        <Route
          path="/ProductDetail/:id"
          element={
            <Productpage
              carthandler={carthandler}
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

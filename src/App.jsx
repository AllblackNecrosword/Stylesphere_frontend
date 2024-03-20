import "./App.css";
import React from "react";
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


function App() {
  return (
    <BrowserRouter>
      {/* Wrap everything inside BrowserRouter */}
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  // Function to determine if Navbar and Footer should be shown
  const shouldShowNavbarAndFooter = () => {
    // Check if the current route starts with "/dashboard"
    return !location.pathname.startsWith("/dashboard");
  };

  return (
    <>
      {/* Conditional rendering for Navbar */}
      {shouldShowNavbarAndFooter() && <Navbar />}
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/men" element={<Shopmen />} />
        <Route path="/women" element={<Shopwomen />} />
        <Route path="/kids" element={<Shopkids />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ProductDetail" element={<Productpage />} />
      </Routes>
      {/* Conditional rendering for Footer */}
      {shouldShowNavbarAndFooter() && <Footer />}
    </>
  );
}

export default App;

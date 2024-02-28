import Main from "./Admin/Components/Main";
import "./App.css";
import Cart from "./Users/Components/Cart";
import Footer from "./Users/Components/Footer";
import Header from "./Users/Components/Header";
import Login from "./Users/Components/Login";
import Navbar from "./Users/Components/Navbar";
import OTP from "./Users/Components/OTP";
import Signup from "./Users/Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopmen from "./Users/Pages/Shopmen";
import Shopwomen from "./Users/Pages/Shopwomen";
import Shopkids from "./Users/Pages/Shopkids";
import Addtocart from "./Users/Pages/Addtocart";
import Wishlist from "./Users/Pages/Wishlist";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<Header/>} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Main/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Addtocart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/men" element={<Shopmen />} />
        <Route path="/women" element={<Shopwomen />} />
        <Route path="/kids" element={<Shopkids />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

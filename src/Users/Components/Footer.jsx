import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-28 ">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Explore Nike</h3>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Nike. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white ">
      <div className="px-5 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wide">
              Company
            </h2>
            <ul className="text-gray-400">
              <li className="mb-3">About Us</li>
              <li className="mb-3">Careers</li>
              <li className="mb-3">Investors</li>
              <li className="mb-3">Sustainability</li>
              <li className="mb-3">Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wide">
              Help
            </h2>
            <ul className="text-gray-400">
              <li className="mb-3">Help Center</li>
              <li className="mb-3">Track Order</li>
              <li className="mb-3">Returns</li>
              <li className="mb-3">Shipping</li>
              <li className="mb-3">FAQ</li>
            </ul>
          </div>
          <div >
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wide">
              Follow Us
            </h2>
            <ul className="text-gray-400">
              <li className="mb-3">
                <a className="hover:underline" href="#">
                  Facebook
                </a>
              </li>
              <li className="mb-3">
                <a className="hover:underline" href="#">
                  Twitter
                </a>
              </li>
              <li className="mb-3">
                <a className="hover:underline" href="#">
                  Instagram
                </a>
              </li>
              <li className="mb-3">
                <a className="hover:underline" href="#">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold uppercase tracking-wide">
              More
            </h2>
            <ul className="text-gray-400">
              <li className="mb-3">Terms of Use</li>
              <li className="mb-3">Privacy Policy</li>
              <li className="mb-3">Site Map</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-5 py-4 mt-10 border-t border-gray-200 sm:flex-row">
        <p className="text-sm">
          © 2023 Nike, Inc. All rights reserved.
        </p>
        <div className="flex mt-4 space-x-4 sm:mt-0">
          <a className="text-sm hover:underline" href="#">
            English (US)
          </a>
          <a className="text-sm hover:underline" href="#">
            Help
          </a>
          <a className="text-sm hover:underline" href="#">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
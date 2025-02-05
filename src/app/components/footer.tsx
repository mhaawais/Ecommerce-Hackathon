import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Address Section */}
        <div className="flex flex-col items-center lg:items-start lg:justify-center text-center lg:text-left">
          <p className={`${myFonts.className} text-gray-500 text-sm sm:text-base`}>
            400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="font-semibold text-lg text-gray-500 mb-3">Links</h2>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="text-black transition-colors duration-300 hover:text-red-500">Home</Link></li>
            <li><Link href="/shop" className="text-black transition-colors duration-300 hover:text-red-500">Shop</Link></li>
            <li><Link href="/about" className="text-black transition-colors duration-300 hover:text-red-500">About</Link></li>
            <li><Link href="/contact" className="text-black transition-colors duration-300 hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="font-semibold text-lg text-gray-500 mb-3">Help</h2>
          <ul className="flex flex-col gap-2">
            <li><p className="text-black transition-colors duration-300 hover:text-red-500">Payment Options</p></li>
            <li><p className="text-black transition-colors duration-300 hover:text-red-500">Returns</p></li>
            <li><p className="text-black transition-colors duration-300 hover:text-red-500">Privacy Policies</p></li>
            <li><Link href="/account" className="text-black transition-colors duration-300 hover:text-red-500">My Account</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="font-semibold text-lg text-gray-500 mb-3">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md w-full text-black"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full border-t border-gray-300 mt-8 pt-4">
        <p className="text-center text-sm sm:text-base md:text-lg">
          2022 Meubel House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

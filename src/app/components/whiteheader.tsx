'use client';

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full py-7 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-3xl cursor-pointer" />
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center items-center flex-grow">
          <ul className="flex justify-center items-center space-x-5 md:space-x-8 lg:space-x-10">
            <li>
              <Link
                href="/#"
                className={`${myFonts.className} font-medium text-[16px] lg:text-xl`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`${myFonts.className} font-medium text-[16px] lg:text-xl`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${myFonts.className} font-medium text-[16px] lg:text-xl`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${myFonts.className} font-medium text-[16px] lg:text-xl`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Shopping Cart Icon */}
        <div className="flex justify-end">
          <Link href="/cart">
            <AiOutlineShoppingCart className="text-4xl lg:text-5xl cursor-pointer hover:text-[#D16E1D]" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#FBEBB5]">
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className={`${myFonts.className} font-medium text-[16px]`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`${myFonts.className} font-medium text-[16px]`}
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${myFonts.className} font-medium text-[16px]`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${myFonts.className} font-medium text-[16px]`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

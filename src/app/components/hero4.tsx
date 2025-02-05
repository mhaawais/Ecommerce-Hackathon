import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero4 = () => {
  return (
    <div className="w-full bg-[#FFF9E5] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 xl:px-32 2xl:px-40 py-8 lg:py-16">
      {/* Image Section */}
      <div className="flex justify-center w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <Image
          src="/Asgaard sofa 12.png"
          alt="new sofa"
          width={883}
          height={603}
          className="w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mt-6 lg:mt-0 w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
        <p className={`${myFonts.className} font-medium text-lg sm:text-xl lg:text-2xl`}>New Arrivals</p>
        <h2 className={`${myFonts.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2`}>Asgaard Sofa</h2>
        <button className="mt-6 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 bg-black text-white font-medium text-lg sm:text-xl rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800">
          <Link href="/asgaard" className={`${myFonts.className} block w-full`}>
            Order Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero4;

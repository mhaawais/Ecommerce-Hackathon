import React from 'react';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero3 = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-32 2xl:px-40 bg-white py-12 lg:py-16 xl:py-20">
      {/* Heading & Description */}
      <div className="text-center mb-8 lg:mb-12">
        <h1 className={`${myFonts.className} font-medium text-2xl sm:text-3xl lg:text-4xl`}>Top Picks For You</h1>
        <p className={`${myFonts.className} font-medium text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mt-2`}>
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Product Cards */}
        {[
          { src: "/Mask Group.png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
          { src: "/Mask Groupaik.png", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
          { src: "/Mask Groupdo.png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
          { src: "/Mask Groupteen.png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
        ].map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-gray-100 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <Image src={product.src} alt={product.name} width={250} height={250} className="w-full h-auto rounded-lg" />
            <p className={`${myFonts.className} text-base sm:text-lg mt-3`}>{product.name}</p>
            <h1 className={`${myFonts.className} font-medium text-lg sm:text-xl lg:text-2xl mt-2`}>{product.price}</h1>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8 lg:mt-12">
        <p className={`${myFonts.className} font-medium text-lg lg:text-xl cursor-pointer border-b-2 border-black inline-block pb-1 hover:text-gray-700`}>View More</p>
      </div>
    </div>
  );
};

export default Hero3;

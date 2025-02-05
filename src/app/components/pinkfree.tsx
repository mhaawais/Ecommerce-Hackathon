import React from 'react';
import { Poppins } from 'next/font/google';

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-poppins',
});

const Free = () => {
  return (
    <div className={`${myFonts.variable} font-sans w-full bg-[#FAF4F4] px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-10 flex justify-center`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left max-w-full">
        {/* Free Delivery */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl">Free Delivery</h1>
          <p className="text-base text-[#9F9F9F]">For all orders over $50, consectetur adipim scing elit.</p>
        </div>

        {/* 90 Days Return */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl">90 Days Return</h1>
          <p className="text-base text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
        </div>

        {/* Secure Payment */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl">Secure Payment</h1>
          <p className="text-base text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Free;
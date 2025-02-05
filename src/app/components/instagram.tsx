import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Instagrampage = () => {
  return (
    <div className="w-full relative">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        {/* Background image with pink accent */}
        <Image src="/Group 43.png" alt="bgimage" layout="fill" objectFit="cover" className="absolute inset-0" />

        {/* Semi-transparent overlay with pink accent */}
        <div className="absolute inset-0 bg-pink-200 opacity-40"></div>

        {/* Text and button container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black px-4 sm:px-8 lg:px-16 z-10">
          <h2 className={`${myFonts.className} font-bold text-[34px] sm:text-[48px] lg:text-[60px]`}>
            Our Instagram
          </h2>
          <p className={`${myFonts.className} text-[16px] sm:text-[20px] lg:text-[22px] mt-2`}>
            Follow our store on Instagram
          </p>
          <button className="bg-[#FAF4F4] text-[#333] border-4 border-solid border-[#333] rounded-full mt-6 py-3 px-8 text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#333] hover:text-white transition-all duration-300">
            <p className={`${myFonts.className} font-medium`}>
              Follow Us
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Instagrampage;

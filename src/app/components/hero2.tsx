import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero2 = () => {
  return (
    <div className="bg-[#FAF4F4] w-full px-3 sm:px-6 lg:px-20 xl:px-32 2xl:px-40 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 py-12 md:py-14 lg:py-16 xl:py-20">
      {/* First Item */}
      <div className="flex flex-col items-center text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <Image
          src="/Granite square side table 12.png"
          alt="tablepic"
          width={600}
          height={400}
          className="w-auto h-auto max-w-full"
        />
        <div className="mt-4">
          <h1 className={`${myFonts.className} font-medium text-2xl md:text-3xl xl:text-4xl`}>Side table</h1>
          <p className={`${myFonts.className} font-medium text-lg md:text-xl xl:text-2xl`}> 
            <span className="border-b-2 border-black cursor-pointer">View More</span>
          </p>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex flex-col items-center text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <Image
          src="/Seater1.png"
          alt="sofapic"
          width={600}
          height={400}
          className="w-auto h-auto max-w-full"
        />
        <div className="mt-4">
          <h1 className={`${myFonts.className} font-medium text-2xl md:text-3xl xl:text-4xl`}>Side table</h1>
          <p className={`${myFonts.className} font-medium text-lg md:text-xl xl:text-2xl`}> 
            <span className="border-b-2 border-black cursor-pointer">View More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

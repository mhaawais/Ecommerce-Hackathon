import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero1 = () => {
  return (
    <div className="w-full bg-[#FBEBB5] py-10 sm:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 lg:px-16">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center md:text-left px-5 md:px-12">
          <h1
            className={`${myFonts.className} font-bold text-3xl sm:text-4xl lg:text-5xl`}
          >
            Rocket Single <br />
            Seater
          </h1>
          <p className={`${myFonts.className} font-medium text-lg sm:text-xl pt-4`}>
            <Link href={'/products'} className="border-b-2 border-black">Shop Now</Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center md:justify-end">
          <Image
            src="/Rocket single seater 1.png"
            alt="Rocket Single Seater"
            height={500}
            width={600}
            className="object-contain max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero1;

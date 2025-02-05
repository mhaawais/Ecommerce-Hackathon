import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from "next/font/google";
import { FaClock, FaCalendarAlt } from 'react-icons/fa';  // Import icons

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Hero5 = () => {
  return (
    <div>
      <div className="w-full h-auto lg:h-[900px] px-3 sm:px-5 lg:px-20 bg-[#FFFFFF]">
        <div className="text-center pt-5 sm:pt-10 lg:pt-16">
          <h1 className={`${myFonts.className} font-medium text-[24px] sm:text-[28px] lg:text-[36px]`}>
            Our Blogs
          </h1>
          <p className={`${myFonts.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-[#9F9F9F]`}>
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 sm:pt-12 lg:pt-16">
          {/* Card 1 */}
          <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <Image src="/Rectangle 13.png" alt="keyboardpic" width={393} height={393} className="w-full h-[250px] object-cover rounded-t-lg" />
            <div className="p-4">
              <p className={`${myFonts.className} text-[18px] sm:text-[20px] lg:text-[22px] font-semibold`}>
                Going all-in with millennial design
              </p>
              <p className={`${myFonts.className} font-medium text-[20px] sm:text-[22px] lg:text-[24px] text-black`}>
                <span className="border-b-2 border-black">Read More</span>
              </p>
              {/* Timer and Date */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <FaClock className="text-gray-500" />
                  <span className="text-gray-700">5 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <span className="text-gray-700">12th October 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <Image src="/Rectangle 14.png" alt="glasslaptop" width={393} height={393} className="w-full h-[250px] object-cover rounded-t-lg" />
            <div className="p-4">
              <p className={`${myFonts.className} text-[18px] sm:text-[20px] lg:text-[22px] font-semibold`}>
                Going all-in with millennial design
              </p>
              <p className={`${myFonts.className} font-medium text-[20px] sm:text-[22px] lg:text-[24px] text-black`}>
                <span className="border-b-2 border-black">Read More</span>
              </p>
              {/* Timer and Date */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <FaClock className="text-gray-500" />
                  <span className="text-gray-700">5 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <span className="text-gray-700">12th October 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <Image src="/Rectangle 15.png" alt="mouselaptop" width={393} height={393} className="w-full h-[250px] object-cover rounded-t-lg" />
            <div className="p-4">
              <p className={`${myFonts.className} text-[18px] sm:text-[20px] lg:text-[22px] font-semibold`}>
                Going all-in with millennial design
              </p>
              <p className={`${myFonts.className} font-medium text-[20px] sm:text-[22px] lg:text-[24px] text-black`}>
                <span className="border-b-2 border-black">Read More</span>
              </p>
              {/* Timer and Date */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <FaClock className="text-gray-500" />
                  <span className="text-gray-700">5 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-gray-500" />
                  <span className="text-gray-700">12th October 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-14">
          <button>
            <Link href="/blog" className={`${myFonts.className} font-medium text-[20px] sm:text-[22px] lg:text-[24px] text-black border-b-2 border-black`}>
              View All Post
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero5;

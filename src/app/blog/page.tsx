import React from "react";
import Image from "next/image";
import { FaArrowRight, FaSearch, FaRegComment, FaRegClock, FaRegCheckCircle } from "react-icons/fa";
import Header from "../components/whiteheader";
import Footer from "../components/footer";
import { Poppins } from "next/font/google";
import Free from "../components/pinkfree";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Placeholder blog data for dynamic future updates
const blogData = [
  {
    title: "Going all-in with millennial design",
    image: "/Rectangle 68.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "14 Oct 2022",
    category: "Wood",
  },
  {
    title: "Exploring new ways of decorating",
    image: "/Page pen.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "14 Oct 2022",
    category: "Handmade",
  },
  {
    title: "Handmade pieces that took time to make",
    image: "/Laptop pen.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "14 Oct 2022",
    category: "Wood",
  },
];

const categoriesData = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPostsData = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/Rectangle 69.png",
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/Hand.png",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "/Pieces.png",
  },
  {
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/Homemade.png",
  },
  {
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/Redesign.png",
  },
];

const Blog = () => {
  return (
    <section>
      <Header />

      {/* First component: blog page */}
      <div className="w-full relative">
        <Image
          src="/Rectangle 1.png"
          alt="bgnewimage"
          height={300} width={300}
          className="w-full h-[316px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Image src="/Meubel.png" alt="vlogo"  height={300} width={300} className="w-[77px] h-[77px]" />
          <h2
            className={`${myFonts.className} font-bold text-[34px] md:text-[40px] lg:text-[48px]`}
          >
            Blog
          </h2>
          {/* Blog > Home navigation for smaller screens */}
          <div className="md:hidden flex gap-2 text-sm mt-2">
            <p className={`${myFonts.className} font-medium text-[#9F9F9F]`}>Blog</p>
            <FaArrowRight className="text-gray-500" />
            <p className={`${myFonts.className} font-light text-[#9F9F9F]`}>Home</p>
          </div>
          <div className="hidden md:flex gap-2 mt-2">
            <p className={`${myFonts.className} font-medium text-[16px]`}>Home</p>
            <FaArrowRight className="text-gray-500" />
            <p className={`${myFonts.className} font-light text-[16px]`}>Blog</p>
          </div>
        </div>
      </div>

      {/* Second component: Blog content */}
      <div className="w-full h-full">
        <div className="mt-[100px] mx-[20px] md:mx-[75px] lg:mx-[10%]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[70%]">
              {blogData.map((blog, index) => (
                <div key={index} className="mb-14">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    height={300} width={300}
                    className="w-full h-[500px] object-cover"
                  />

                  <div className="flex gap-16 mt-5">
                    <div className="flex gap-4">
                      <FaRegComment className="text-gray-500" />
                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>Admin</p>
                    </div>
                    <div className="flex gap-4">
                      <FaRegClock className="text-gray-500" />
                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                        {blog.date}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <FaRegCheckCircle className="text-gray-500" />
                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                        {blog.category}
                      </p>
                    </div>
                  </div>

                  <h2 className={`${myFonts.className} font-medium text-[30px] mt-6`}>
                    {blog.title}
                  </h2>

                  <p className={`${myFonts.className} text-[15px] text-justify text-[#9F9F9F] mt-3`}>
                    {blog.content}
                  </p>
                  <p className={`${myFonts.className} text-[16px] mt-10`}>
                    <span className="border-b-2 border-black cursor-pointer">Read more</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar: Categories and Recent Posts */}
            <div className="pl-[20px] md:pl-[75px] lg:pl-[60px] mt-14 lg:mt-0 space-y-28">
              {/* Categories */}
              <div className="space-y-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-[40px] border rounded-[10px] border-[#9F9F9F] px-4 text-gray-500"
                  />
                  <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                </div>

                <h2 className={`${myFonts.className} font-medium text-[24px]`}>Categories</h2>

                <div className="space-y-8">
                  {categoriesData.map((category, index) => (
                    <div key={index} className="flex justify-between">
                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                        {category.name}
                      </p>
                      <p className={`${myFonts.className} text-[16px] text-[#9F9F9F]`}>
                        {category.count}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="space-y-12">
                <h2 className={`${myFonts.className} font-medium text-[24px]`}>Recent Posts</h2>

                <div className="space-y-9">
                  {recentPostsData.map((post, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        height={300} width={300}
                        className="w-[80px] h-[80px] object-cover"
                      />
                      <div className="space-y-1">
                        <p className={`${myFonts.className} text-[14px]`}>{post.title}</p>
                        <p className={`${myFonts.className} text-[12px] text-[#9F9F9F]`}>
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="gap-10 flex justify-center mt-20">
          <button className="bg-[#FBEBB5] w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center">
            <span className={`${myFonts.className} text-[20px]`}>1</span>
          </button>
          <button className="bg-[#FFF9E5] w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center">
            <span className={`${myFonts.className} text-[20px]`}>2</span>
          </button>
          <button className="bg-[#FFF9E5] w-[60px] h-[60px] border rounded-[10px] flex justify-center items-center">
            <span className={`${myFonts.className} text-[20px]`}>3</span>
          </button>
        </div>
      </div>
      <Free />
      <Footer />
    </section>
  );
};

export default Blog;

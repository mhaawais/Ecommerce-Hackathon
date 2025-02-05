"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/whiteheader";
import Free from "../components/pinkfree";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="w-full">
        {/* Hero Section */}
        <div
          className="relative w-full h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/Rectangle 1.png')" }}
        >
          <Image src="/Meubel.png" alt="logo" width={77} height={77} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">About Us</h2>
          <h3 className="text-sm md:text-md lg:text-lg font-medium text-black mt-2">Home &gt; About</h3>
        </div>

        {/* About Content Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-10 text-black text-center">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-600">
            We are a team dedicated to providing high-quality products and services. Our mission is to bring 
            innovation and excellence to everything we do. With a passion for craftsmanship and a commitment 
            to customer satisfaction, we strive to be the best in our industry.
          </p>
        </div>
      </section>
      <Free />
      <Footer />
    </div>
  );
};

export default About;

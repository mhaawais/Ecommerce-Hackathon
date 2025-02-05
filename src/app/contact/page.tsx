"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { sendFeedbackToSanity } from "../lib/sanity";
import Header from "../components/whiteheader";
import Free from "../components/pinkfree";
import Footer from "../components/footer";

type FormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await sendFeedbackToSanity(data);
    reset();
    setLoading(false);
    alert("Thank you for your feedback!");
  };

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Contact</h2>
          <h3 className="text-sm md:text-md lg:text-lg font-medium text-black mt-2">Home &gt; Contact</h3>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-black px-16">
          {[
            { icon: <FaMapMarkerAlt />, title: "Address", text: "236 5th SE Avenue, New York NY10000, USA" },
            { icon: <FaPhone />, title: "Phone", text: "Mobile: +(84) 546-6789 \n Hotline: +(84) 456-6789" },
            { icon: <FaClock />, title: "Working Time", text: "Mon-Fri: 9:00 - 22:00 \n Sat-Sun: 9:00 - 21:00" },
          ].map((info, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="text-3xl text-yellow-500">{info.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{info.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-10 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-black">Get In Touch</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <input {...register("name", { required: true })} className="p-3 border rounded-md" placeholder="Your Name" required />
            <input {...register("email", { required: true })} className="p-3 border rounded-md" placeholder="Email Address" type="email" required />
            <input {...register("subject")} className="p-3 border rounded-md" placeholder="Subject (Optional)" />
            <textarea {...register("message", { required: true })} className="p-3 border rounded-md h-32" placeholder="Your Message" required></textarea>
            <button type="submit" className="bg-yellow-500 text-white py-3 rounded-md text-lg" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
      <Free />
      <Footer />
    </div>
  );
};

export default Contact;

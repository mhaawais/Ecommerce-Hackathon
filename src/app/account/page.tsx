"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/whiteheader";
import Footer from "../components/footer";
import { Poppins } from "next/font/google";
import { sendFeedbackToSanity } from "../lib/sanity";
import Free from "../components/pinkfree";

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Account = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data: ", loginData);
    await sendFeedbackToSanity({
      name: loginData.email,
      email: loginData.email,
      message: "User logged in.",
    });
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register Data: ", registerData);
    await sendFeedbackToSanity({
      name: registerData.email,
      email: registerData.email,
      message: "User registered.",
    });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section>
      <Header />

      {/* First Component: My Account */}
      <div className="w-full relative">
        <Image
          src="/Rectangle 1.png"
          alt="bgnewimage"
          width={1440}
          height={316}
          className="object-cover w-full h-auto"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
          <Image src="/Meubel.png" alt="vlogo" width={77} height={77} />
          <h2
            className={`${myFonts.className} font-bold text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] text-center sm:px-4`}
          >
            My Account
          </h2>
          <div className="flex gap-2 mt-2 justify-center">
            <p className={`${myFonts.className} font-medium text-[14px] sm:text-[16px]`}>Home</p>
            <Image src="/Arrow.png" alt="rightarrow" width={20} height={20} />
            <p className={`${myFonts.className} font-light text-[14px] sm:text-[16px]`}>My Account</p>
          </div>
        </div>
      </div>

      {/* Second Component: Login and Register */}
      <div className="h-full mt-[70px] mb-[70px] mx-[20px] sm:mx-[50px] lg:mx-[110px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Login Form */}
          <div className="w-full lg:w-[45%]">
            <h2 className={`${myFonts.className} font-semibold text-[24px] sm:text-[28px] lg:text-[36px] mb-14`}>
              Log In
            </h2>

            <form onSubmit={handleLoginSubmit} className="space-y-10">
              <div className="space-y-4">
                <h3 className={`${myFonts.className} font-medium text-[16px]`}>Username or email address</h3>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="w-full h-[65px] border rounded-[10px] border-[#9F9F9F] px-4"
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className={`${myFonts.className} font-medium text-[16px]`}>Password</h3>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="w-full h-[65px] border rounded-[10px] border-[#9F9F9F] px-4"
                  required
                />
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="h-[27px] w-[30px] border rounded-[5px] border-[#9F9F9F]" />
                  <h3 className={`${myFonts.className} text-[16px]`}>Remember me</h3>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 h-[65px] border border-black rounded-[15px] flex justify-center items-center"
                  >
                    <span className={`${myFonts.className} text-[20px]`}>Log In</span>
                  </button>
                  <p className={`${myFonts.className} font-light text-[16px]`}>Lost Your Password?</p>
                </div>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="w-full lg:w-[55%]">
            <div className="lg:ml-[140px] mt-[70px] lg:mt-0">
              <h2 className={`${myFonts.className} font-semibold text-[24px] sm:text-[28px] lg:text-[36px] mb-14`}>
                Register
              </h2>

              <form onSubmit={handleRegisterSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h3 className={`${myFonts.className} font-medium text-[16px]`}>Email address</h3>
                  <input
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    className="w-full h-[65px] border rounded-[10px] border-[#9F9F9F] px-4"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <h3 className={`${myFonts.className} font-medium text-[16px]`}>Password</h3>
                  <input
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    className="w-full h-[65px] border rounded-[10px] border-[#9F9F9F] px-4"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <h3 className={`${myFonts.className} font-medium text-[16px]`}>Confirm Password</h3>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    className="w-full h-[65px] border rounded-[10px] border-[#9F9F9F] px-4"
                    required
                  />
                </div>

                <p className={`${myFonts.className} font-light text-[16px]`}>
                  A link to set a new password will be sent to your email address.
                </p>

                <p className={`${myFonts.className} font-light text-[16px]`}>
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{" "}
                  <span className={`${myFonts.className} font-semibold text-[16px]`}>privacy policy</span>.
                </p>

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 h-[65px] border border-black rounded-[15px] flex justify-center items-center"
                  >
                    <span className={`${myFonts.className} text-[20px]`}>Register</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Free />
      <Footer />
    </section>
  );
};

export default Account;

"use client"

import React, { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"
import Header from "../components/whiteheader"
import Footer from "../components/footer"
import Free from "../components/pinkfree"
import { Poppins } from "next/font/google"
import { ChevronRight } from "lucide-react"
import { createClient } from "@sanity/client"
import { useCart } from "../contexts/CartContext"

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const sanityClient = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset",
  useCdn: false,
  token: "your-sanity-token",
})

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  town: z.string().min(1, "Town/City is required"),
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().min(1, "ZIP code is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  additionalInfo: z.string().optional(),
  paymentMethod: z.enum(["bank", "card", "cash"]),
})

const Checkout = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { cartItems, getSubtotal, getTotal, clearCart } = useCart()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    setIsSubmitting(true)
    try {
      await sanityClient.create({
        _type: "order",
        ...data,
        items: cartItems,
        subtotal: getSubtotal(),
        total: getTotal(),
        createdAt: new Date().toISOString(),
      })
      clearCart()
      router.push("/thank-you")
    } catch (error) {
      console.error("Error submitting order:", error)
      alert("There was an error submitting your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={myFonts.className}>
      <Header />

      <div className="w-full relative bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Checkout</h2>
            <div className="flex justify-center items-center gap-2">
              <p className="font-medium text-sm md:text-base">Home</p>
              <ChevronRight className="w-4 h-4" />
              <p className="font-light text-sm md:text-base">Checkout</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-8">Billing details</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-medium">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    id="firstName"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="mt-1 text-red-500">{errors.firstName.message as string}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 font-medium">
                    Last Name
                  </label>
                  <input
                    {...register("lastName")}
                    id="lastName"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="mt-1 text-red-500">{errors.lastName.message as string}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block mb-2 font-medium">
                  Company Name (Optional)
                </label>
                <input
                  {...register("companyName")}
                  id="companyName"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="country" className="block mb-2 font-medium">
                  Country / Region
                </label>
                <select {...register("country")} id="country" className="w-full p-3 border rounded-lg appearance-none">
                  <option value="">Select a country</option>
                  <option value="sri-lanka">Sri Lanka</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="pakistan">Pakistan</option>
                </select>
                {errors.country && <p className="mt-1 text-red-500">{errors.country.message as string}</p>}
              </div>

              <div>
                <label htmlFor="streetAddress" className="block mb-2 font-medium">
                  Street address
                </label>
                <input
                  {...register("streetAddress")}
                  id="streetAddress"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your street address"
                />
                {errors.streetAddress && <p className="mt-1 text-red-500">{errors.streetAddress.message as string}</p>}
              </div>

              <div>
                <label htmlFor="town" className="block mb-2 font-medium">
                  Town / City
                </label>
                <input
                  {...register("town")}
                  id="town"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your town or city"
                />
                {errors.town && <p className="mt-1 text-red-500">{errors.town.message as string}</p>}
              </div>

              <div>
                <label htmlFor="province" className="block mb-2 font-medium">
                  Province
                </label>
                <select
                  {...register("province")}
                  id="province"
                  className="w-full p-3 border rounded-lg appearance-none"
                >
                  <option value="">Select a province</option>
                  <option value="western">Western Province</option>
                  <option value="central">Central Province</option>
                  <option value="southern">Southern Province</option>
                </select>
                {errors.province && <p className="mt-1 text-red-500">{errors.province.message as string}</p>}
              </div>

              <div>
                <label htmlFor="zipCode" className="block mb-2 font-medium">
                  ZIP code
                </label>
                <input
                  {...register("zipCode")}
                  id="zipCode"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your ZIP code"
                />
                {errors.zipCode && <p className="mt-1 text-red-500">{errors.zipCode.message as string}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  id="phone"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-red-500">{errors.phone.message as string}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email address
                </label>
                <input
                  {...register("email")}
                  id="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-red-500">{errors.email.message as string}</p>}
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block mb-2 font-medium">
                  Additional information
                </label>
                <textarea
                  {...register("additionalInfo")}
                  id="additionalInfo"
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                  placeholder="Enter any additional information"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="lg:ml-12">
              <h2 className="font-semibold text-2xl lg:text-3xl mb-8">Your order</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <p className="font-medium">Product</p>
                  <p className="font-medium">Subtotal</p>
                </div>

                {cartItems.map((item) => (
                  <div key={item._id} className="flex justify-between">
                    <p className="text-gray-600">
                      {item.name} <span className="font-medium text-black"> X {item.quantity}</span>
                    </p>
                    <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}

                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>Rs. {getSubtotal().toLocaleString()}</p>
                </div>

                <div className="flex justify-between">
                  <p>Total</p>
                  <p className="font-bold text-xl text-yellow-700">Rs. {getTotal().toLocaleString()}</p>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-8 space-y-4">
                <div>
                  <label className="inline-flex items-center">
                    <input {...register("paymentMethod")} type="radio" value="bank" className="form-radio" />
                    <span className="ml-2">Direct Bank Transfer</span>
                  </label>
                  <p className="text-sm text-gray-600 mt-2">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                    Your order will not be shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div>
                  <label className="inline-flex items-center">
                    <input {...register("paymentMethod")} type="radio" value="card" className="form-radio" />
                    <span className="ml-2">Credit Card</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center">
                    <input {...register("paymentMethod")} type="radio" value="cash" className="form-radio" />
                    <span className="ml-2">Cash On Delivery</span>
                  </label>
                </div>
              </div>

              <p className="text-sm mt-6">
                Your personal data will be used to support your experience throughout this website, to manage access to
                your account, and for other purposes described in our{" "}
                <a href="#" className="font-semibold">
                  privacy policy
                </a>
                .
              </p>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
                >
                  {isSubmitting ? "Processing..." : "Place order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Free />
      <Footer />
    </section>
  )
}

export default Checkout


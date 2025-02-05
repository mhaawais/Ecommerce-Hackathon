"use client"

import React from "react"
import Header from "@/app/components/whiteheader"
import Footer from "@/app/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../contexts/CartContext"

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getSubtotal, getTotal } = useCart()
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <section>
      <Header />
      <div className="w-full relative">
        <Image src="/Rectangle 1.png" alt="bgnewimage" width={1440} height={316} />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Image src="/Meubel.png" alt="vlogo" width={77} height={77} />
          <h2 className="font-bold text-[34px] md:text-[40px] lg:text-[48px]">Cart</h2>
          <div className="hidden md:flex gap-2">
            <p className="font-medium text-[16px]">Home</p>
            <Image src="/Arrow.png" alt="rightarrow" width={20} height={20} />
            <p className="font-light text-[16px]">Cart</p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[400px] bg-[#FFFFFF] p-4 sm:p-8 lg:p-[100px]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#FFF9E5] p-4 rounded-md flex justify-between font-semibold text-sm sm:text-base">
              <span className="w-1/3 text-center">Product</span>
              <span className="w-1/6 text-center">Price</span>
              <span className="w-1/6 text-center">Quantity</span>
              <span className="w-1/6 text-center">Subtotal</span>
              <span className="w-1/12 text-center">Remove</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-md"
              >
                <div className="flex items-center space-x-4 w-full sm:w-1/3 mb-4 sm:mb-0">
                  {item.image && (
                    <Image src={item.image.asset.url || "/placeholder.svg"} alt={item.name} width={80} height={80} />
                  )}
                  <p className="text-gray-700 text-sm sm:text-base">{item.name}</p>
                </div>
                <p className="w-full sm:w-1/6 text-center text-gray-700 text-sm sm:text-base mb-2 sm:mb-0">
                  Rs. {item.price.toLocaleString()}
                </p>
                <div className="w-full sm:w-1/6 flex justify-center mb-2 sm:mb-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                    className="w-16 border text-center rounded-md"
                  />
                </div>
                <p className="w-full sm:w-1/6 text-center text-gray-700 text-sm sm:text-base mb-2 sm:mb-0">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </p>
                <button onClick={() => removeFromCart(item._id)} className="w-full sm:w-1/12 text-center">
                  <Image src="/Bin pic.png" alt="Remove" width={20} height={20} />
                </button>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-10 flex flex-col items-center sm:items-end">
            <div className="w-full sm:w-[342px] bg-[#FFF9E5] p-6 rounded-md space-y-4">
              <h2 className="font-semibold text-xl text-center">Cart Totals</h2>
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>Rs. {getSubtotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-[#B88E2F]">Rs. {getTotal().toLocaleString()}</span>
              </div>
              <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
                <Link href="/checkout">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  )
}

export default Cart


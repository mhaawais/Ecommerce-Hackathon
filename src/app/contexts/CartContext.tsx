"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type CartItem = {
  _id: string
  name: string
  price: number
  quantity: number
  image?: {
    asset: {
      url: string
    }
  }
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getSubtotal: () => number
  getTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isClient])

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id)
      if (existingItem) {
        return prevItems.map((i) => (i._id === item._id ? { ...i, quantity: i.quantity + item.quantity } : i))
      }
      return [...prevItems, item]
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item._id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getTotal = () => {
    return getSubtotal()
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getSubtotal,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


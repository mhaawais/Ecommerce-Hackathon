"use client"

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import Header from "@/app/components/whiteheader"
import Free from "@/app/components/pinkfree"
import Footer from "@/app/components/footer"

interface Product {
  _id: string
  name: string
  price: number
  discountPercentage: number
  stockLevel: number
  quantity?: number
  image?: {
    asset: {
      url: string
    }
  }
}

export default function Featured() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const fetchProducts = async () => {
      const Query = `*[_type == "product"] {
        _id,
        name,
        price,
        stockLevel,
        discountPercentage,
        image {
          asset -> { url }
        }
      }`

      const data: Product[] = await client.fetch(Query)
      setProducts(data)
    }

    fetchProducts()

    const storedCart = JSON.parse(localStorage.getItem("cart") ?? "[]")
    setCart(storedCart)
  }, [])

  const addToCart = (product: Product) => {
    const updatedCart = [...cart]
    const existingProduct = updatedCart.find((item) => item._id === product._id)

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1
    } else {
      updatedCart.push({ ...product, quantity: 1 })
    }

    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    alert("Product added to cart!")
  }

  if (!isClient) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="group border rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 bg-white"
            >
              <Link href={`/products/${product._id}`} passHref>
                <div className="w-full h-60 overflow-hidden rounded-md cursor-pointer">
                  {product.image && (
                    <Image
                      src={product.image.asset.url || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  )}
                </div>
              </Link>

              <div className="mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-500">${product.price ? Number(product.price).toFixed(2) : "N/A"}</p>

                {product.discountPercentage > 0 && (
                  <p className="text-red-500 text-sm font-semibold">-{product.discountPercentage}% Off</p>
                )}

                <p className={`text-sm ${product.stockLevel > 0 ? "text-green-600" : "text-red-500"}`}>
                  {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              <button
                onClick={() => addToCart(product)}
                className={`w-full mt-4 bg-black text-white py-2 rounded-md ${product.stockLevel > 0 ? "" : "bg-gray-400 cursor-not-allowed"}`}
                disabled={product.stockLevel === 0}
              >
                <FaShoppingCart className="inline mr-2" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Free />
      <Footer />
    </section>
  )
}


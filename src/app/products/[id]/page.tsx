"use client"

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"
import Header from "@/app/components/whiteheader"
import Footer from "@/app/components/footer"
import { Poppins } from "next/font/google"
import { useParams } from "next/navigation"

const myFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

interface Product {
  _id: string
  name: string
  price: number
  description: string
  stockLevel: number
  quantity?: number
  image?: {
    asset: {
      url: string
    }
  }
  discountPercentage: number
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<Product[]>([])
  const [isClient, setIsClient] = useState(false)

  const params = useParams()

  useEffect(() => {
    setIsClient(true)
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == "${params.id}"][0] {
        _id,
        name,
        price,
        description,
        stockLevel,
        discountPercentage,
        image {
          asset -> { url }
        }
      }`

      const data: Product = await client.fetch(query)
      setProduct(data)
    }

    fetchProduct()

    const storedCart = JSON.parse(localStorage.getItem("cart") ?? "[]")
    setCart(storedCart)
  }, [params.id])

  const addToCart = () => {
    if (!product) return

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

  if (!isClient || !product) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            {product.image && (
              <Image
                src={product.image.asset.url || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            )}
          </div>

          <div className="space-y-4">
            <h1 className={`${myFonts.className} text-3xl font-semibold`}>{product.name}</h1>
            <p className="text-lg text-gray-700">{product.description}</p>

            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-900">Rs. {product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="text-red-500 text-lg font-semibold">-{product.discountPercentage}% Off</span>
              )}
            </div>

            <div className="text-lg font-semibold text-gray-700">
              <p>Stock Level: {product.stockLevel}</p>
              <p className={product.stockLevel > 0 ? "text-green-600" : "text-red-600"}>
                {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            <button
              onClick={addToCart}
              className={`mt-4 w-full py-2 rounded-md text-white bg-black ${product.stockLevel === 0 ? "bg-gray-400 cursor-not-allowed" : ""}`}
              disabled={product.stockLevel === 0}
            >
              <FaShoppingCart className="inline mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}


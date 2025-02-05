import React from "react";
import Navbar from "./components/navbar";
import Hero1 from "./components/hero1";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import Hero4 from "./components/hero4";
import Hero5 from "./components/hero5";
import Instagrampage from "./components/instagram";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
        
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Instagrampage />
      <Footer />

    </div>
  );
}



{/*
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Define a Product type based on your query
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
  discountPercentage: number;
  image?: {
    asset: {
      url: string;
    };
  };
}

export default async function Featured() {
  // Fetch data inside the component
  const Query = `*[_type == "product"] {
    _id,
    name,
    description,
    price,
    category,
    stockLevel,
    isFeaturedProduct,
    discountPercentage,
    image {
      asset -> { url }
    }
  }`;

  const data: Product[] = await client.fetch(Query); // Type the data as an array of Product

  return (
    <div className="p-10 my-10">
      <h1 className="text-center font-bold text-3xl mb-8 text-blue-950">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product._id}
            className="rounded-lg border p-4 flex flex-col items-center space-y-4 shadow-md hover:shadow-lg transition duration-300"
          >

            {product.image?.asset?.url ? (
              <div className="relative w-full h-48">
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  layout="fill"
                  style={{ objectFit: 'cover' }} // Update this line
                  className="rounded-t-lg"
                />
              </div>
            ) : (
              <p className="text-gray-500">No Image Available</p>
            )}

            <div className="text-center space-y-2">
              <h1 className="text-lg font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-green-600 font-semibold text-lg">${product.price}</p>
              <h6 className="text-xl text-zinc-500 font-medium">Discount : ${product.discountPercentage}</h6>
              <h2 className="text-gray-600 text-lg">{product.category}</h2>
              <p className="text-gray-700">Stock Level: {product.stockLevel}</p>
              <p className="text-gray-700">
                Featured: {product.isFeaturedProduct ? "Yes" : "No"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


*/}

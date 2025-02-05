'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFilter, FaAngleRight, FaAngleLeft, FaSortAmountDown } from 'react-icons/fa';
import Header from '../components/whiteheader';
import Free from '../components/pinkfree';
import Footer from '../components/footer';

const products = [
  { id: 1, name: 'Trenton modular sofa_3', price: 25000, image: '/Mask Group.png' },
  { id: 2, name: 'Granite dining table', price: 50000, image: '/Mask Groupaik.png' },
  { id: 3, name: 'Outdoor bar table', price: 75000, image: '/Mask Groupdo.png' },
  { id: 4, name: 'Plain console', price: 100000, image: '/Mask Groupteen.png' },
  { id: 5, name: 'Grain coffee table', price: 15000, image: '/Hello.png' },
  { id: 6, name: 'Kent coffee table', price: 125000, image: '/Qwerty.png' },
  { id: 7, name: 'Round coffee table', price: 90000, image: '/Right.png' },
  { id: 8, name: 'Reclaimed teak table', price: 20000, image: '/Left.png' },
  { id: 9, name: 'Console table', price: 258200, image: '/Bottom.png' },
  { id: 10, name: 'Sideboard', price: 200000, image: '/Cupboard.png' },
  { id: 11, name: 'SJP_0825', price: 200000, image: '/Set full.png' },
  { id: 12, name: 'Bella chair', price: 100000, image: '/Single.png' },
  { id: 13, name: 'Granite side table', price: 258800, image: '/Granite table.png' },
  { id: 14, name: 'Asgaard sofa', price: 250000, image: '/Asgaard.png' },
  { id: 15, name: 'Maya sofa', price: 115000, image: '/Maya.png' },
  { id: 16, name: 'Outdoor sofa set', price: 244000, image: '/Outdoor.png' },
];

const Shop = () => {
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter products by price
  const filteredProducts = selectedPrice
    ? products.filter(product => product.price <= selectedPrice)
    : products;

  // Correct calculation of total pages based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  // Paginate the products dynamically based on current page
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='w-full'>
      <Header />
      {/* Hero Section */}
      <div className='relative w-full h-[316px]'>
        <Image src='/Rectangle 1.png' alt='bg-image' layout='fill' objectFit='cover' />
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <Image src='/Meubel.png' alt='logo' width={77} height={77} />
          <h2 className='font-bold text-[34px] md:text-[40px] lg:text-[48px]'>Shop</h2>
          <div className='flex gap-2'>
            <p className='text-[16px]'>Home</p>
            <Image src='/Arrow.png' alt='arrow' width={20} height={20} />
            <p className='text-[16px]'>Shop</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className='mt-5 bg-[#FAF4F4] w-full flex flex-col md:flex-row items-center justify-between p-4'>
        <div className='flex items-center gap-4'>
          <FaFilter className='text-xl' />
          <p className='text-lg'>Filter</p>
          <select
            className='p-2 border rounded-md'
            onChange={e => {
              setSelectedPrice(Number(e.target.value) || null);
              setCurrentPage(1); // Reset page when filter is applied
            }}
          >
            <option value=''>All Prices</option>
            <option value='50000'>Under Rs. 50,000</option>
            <option value='100000'>Under Rs. 100,000</option>
            <option value='200000'>Under Rs. 200,000</option>
          </select>
        </div>
        <div className='flex items-center gap-4'>
          <FaSortAmountDown className='text-xl' />
          <p className='text-lg'>Sort by</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {paginatedProducts.map(product => (
          <div key={product.id} className='p-4 border rounded-lg text-center'>
            <Image src={product.image} alt={product.name} width={287} height={287} />
            <p className='text-lg font-semibold mt-2'>{product.name}</p>
            <h1 className='text-xl font-bold'>Rs. {product.price.toLocaleString()}</h1>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-6 space-x-4'>
        <button
          className='px-4 py-2 bg-gray-200 rounded-md'
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          <FaAngleLeft />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-yellow-400' : 'bg-gray-200'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='px-4 py-2 bg-gray-200 rounded-md'
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <FaAngleRight />
        </button>
      </div>
      <Free />
      <Footer />
    </div>
  );
};

export default Shop;

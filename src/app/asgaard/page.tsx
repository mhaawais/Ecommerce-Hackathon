import React from 'react';
import Image from 'next/image';
import Header from '../components/whiteheader';
import Footer from '../components/footer';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const myFonts = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

const relatedProducts = [
  { id: 1, name: 'Elegant Chair', price: 'Rs. 18,500.00', image: '/Mask Group.png' },
  { id: 2, name: 'Modern Table', price: 'Rs. 45,000.00', image: '/Mask Groupaik.png' },
  { id: 3, name: 'Classic Lamp', price: 'Rs. 12,000.00', image: '/Mask Groupdo.png' },
  { id: 4, name: 'Luxury Sofa', price: 'Rs. 90,000.00', image: '/Mask Groupteen.png' }
];

const Product = () => {
  return (
    <section className="w-full">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className='hidden md:flex items-center bg-white px-6 md:px-16 lg:px-24 py-4'>
        <div className='flex items-center gap-2 md:gap-4'>
          <p className={`${myFonts.className} text-gray-500 text-sm md:text-base`}>Home</p>
          <Image src='/Arrow.png' alt='sign' width={20} height={20} />
          <p className={`${myFonts.className} text-gray-500 text-sm md:text-base`}>Shop</p>
          <Image src='/Arrow.png' alt='sign' width={20} height={20} />
        </div>
        <div className='mx-4 h-8 w-px bg-gray-400'></div>
        <p className={`${myFonts.className} text-base md:text-lg`}>Asgaard Sofa</p>
      </div>

      {/* Product Details */}
      <div className='px-4 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row gap-10'>
        <div className='w-full md:w-1/2'>
          <Image src='/Group 102.png' alt='sofa' width={553} height={500} className='w-full h-auto' />
        </div>
        <div className='w-full md:w-1/2 space-y-5'>
          <h2 className={`${myFonts.className} text-3xl md:text-4xl`}>Asgaard Sofa</h2>
          <h3 className={`${myFonts.className} text-xl text-gray-500`}>Rs. 250,000.00</h3>
          <div className='flex items-center gap-4'>
            <Image  src='/Group 88.png' alt='rating' width={124} height={20} />
            <p className='text-sm text-gray-500'>5 Customer Reviews</p>
          </div>
          <p className='text-sm md:text-base text-gray-700'>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
          </p>
          <div className='space-y-3'>
            <p className='text-gray-500'>Size</p>
            <div className='flex gap-3'>
              {['L', 'XL', 'XS'].map((size) => (
                <div key={size} className='bg-gray-100 border rounded-md w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-200'>
                  <span>{size}</span>
                </div>
              ))}
            </div>
            <p className='text-gray-500'>Color</p>
            <div className='flex gap-3'>
              {['#816DFA', '#000000', '#CDBA7B'].map((color) => (
                <div key={color} className='w-8 h-8 rounded-full border cursor-pointer' style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div className='border rounded-md flex items-center justify-between px-4 py-2 w-32'>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className='border-2 border-gray-400 rounded-md px-6 py-3 hover:bg-gray-200'>
              <Link href='/cart'>Add To Cart</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className='px-4 md:px-16 lg:px-24 py-10 bg-white border-t'>
        <h2 className='text-xl md:text-2xl font-medium'>Description</h2>
        <p className='text-gray-600'>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall.
        </p>
        <div className='w-full mt-6'>
          <Image src='/Double image.png' alt='double' width={1239} height={348} className='w-full h-auto' />
        </div>
      </div>

      {/* Related Products */}
      <div className='px-4 md:px-16 lg:px-24 py-10 bg-white border-t'>
        <h2 className='text-center text-2xl md:text-3xl font-medium mb-6'>Related Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {relatedProducts.map((product) => (
            <div key={product.id} className='text-center bg-gray-100 p-4 rounded-lg shadow-md'>
              <Image src={product.image} alt={product.name} width={287} height={287} className='w-full h-auto rounded-lg' />
              <p className='text-lg mt-2'>{product.name}</p>
              <h3 className='text-xl font-medium'>{product.price}</h3>
            </div>
          ))}
        </div>
        <div className='text-center mt-6'>
          <Link href='/shop' className='border-b-2 border-black text-lg font-medium'>View More</Link>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Product;

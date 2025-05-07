'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';

const products = dataSite.products;
export default function ProductShowcaseSection() {
  const { validateProductInCart, handleAddOrRemoveProduct } = useCart();
  return (
    <section id='products' className='bg-black text-white py-24 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto text-start mb-12'>
        <p className='text-[#FDB813] font-medium uppercase mb-2'>Products</p>
        <h2 className='text-4xl font-extrabold leading-snug max-w-xl'>
          We take pride in our services — designed for performance and results.
        </h2>
      </div>

      <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
        {products.map((product, index) => {
          const isInCart = validateProductInCart(product.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(product.id);
          };
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-white/5 rounded-lg overflow-hidden shadow-lg'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-[260px] object-cover'
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {product.name}
                </h3>
                <p className='text-sm text-white/90 mb-4'>
                  {product.description}
                </p>
                <div className='flex justify-between items-center'>
                  <span className='text-lg font-semibold text-[#FDB813]'>
                    ${product.price}
                  </span>
                  <button
                    onClick={handleClick}
                    style={{
                      backgroundColor: isInCart ? '#1a48ff' : '#FDB813',
                      color: isInCart ? '#fff' : '#000',
                    }}
                    className='bg-white text-black px-4 py-2 text-sm font-semibold rounded-full hover:bg-gray-200 transition'
                  >
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// app/components/OurProducts.tsx
'use client';

import Image from 'next/image';

const OurProducts = () => {
  const products = [
    { id: 1, image: '/images/products/product1.png', name: 'Product Image' },
    { id: 2, image: '/images/products/product2.png', name: 'Product Image' },
    { id: 3, image: '/images/products/product3.png', name: 'Product Image' },
  ];

  return (
    <div className="bg-gray-200 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Products</h2>
      <div className="flex justify-center space-x-8">
        {products.map((product) => (
          <div key={product.id} className="w-1/4 bg-black text-white p-4 rounded-lg flex flex-col items-center">
            <div className="w-full h-64 relative">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <span className="mt-4">{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

// /app/components/Catalog.tsx
'use client';

import { useState } from 'react';

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: 'Product 1', category: 'category1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', category: 'category2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', category: 'category1', description: 'Description of Product 3' },
    // Add more products as needed
  ];

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === 'all' || product.category === filter)
    );
  });

  return (
    <div className="catalog-page p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Catalog</h1>
      <div className="search-filter-bar mb-8 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <div>
          <label htmlFor="product-filter" className="mr-2">Filter by category:</label>
          <select
            id="product-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item border p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p>{product.description}</p>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;

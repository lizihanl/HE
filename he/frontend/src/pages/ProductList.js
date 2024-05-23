
import React from 'react';
import Product from '../components/Product';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, image: 'https://via.placeholder.com/150' },
  // ...更多产品
];

function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

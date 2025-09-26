import React, { useContext } from 'react';
import CartContext from './CartContext';


const ProductList = () => {
  const { products, addItem } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 && <p>No products available. Add some!</p>}
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '8px' }}>
          <span>{product.name}</span>
          <button style={{ marginLeft: '8px' }} onClick={() => addItem(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

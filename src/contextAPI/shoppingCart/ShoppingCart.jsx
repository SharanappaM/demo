import React, { useState, useContext } from 'react';
import CartContext from './CartContext';

const AddProductForm = () => {
  const { addProduct, products } = useContext(CartContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Generate new id (simple incremental id)
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    addProduct({ id: newId, name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="New product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: '8px' }}>
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;

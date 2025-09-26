import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // Add item to cart
  const addItem = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };


  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Add new product to products list
  const addProduct = (product) => {
    setProducts(prev => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, clearCart, products, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

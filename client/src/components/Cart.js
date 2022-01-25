import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    
  return (
      <>
        Hello
      </>
  )
}

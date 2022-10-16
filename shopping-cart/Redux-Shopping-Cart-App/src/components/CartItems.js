import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const items=useSelector((state)=>state.cart.itemsList);
  console.log(items);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {
          items.map((item)=>{
            return (
              <li key={item.id}>
              <CartItem quantity={item.quantity} id={item.id} total={item.totalPrice} price={item.price} name={item.name} />
              </li>
            )
          })
        }
       
      </ul>
    </div>
  );
};

export default CartItems;

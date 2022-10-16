import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const totalQuantity=useSelector((state)=>state.cart.totalQuantity);
  const quantity = totalQuantity?totalQuantity:0;
  const dispatch= useDispatch();
  const showCart=()=>{
    dispatch(cartAction.showCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-action";
import { cartAction } from "./store/cart-slice";
let isFirstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    if(isLoggedIn){
      dispatch(fetchData());
    }

  }, [dispatch,isLoggedIn])
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch])
  return (
    <div className="App">
      {notification && notification.open && <Notification type={notification.type} messsage={notification.message}></Notification>}
      {isLoggedIn && <Layout />}
      {!isLoggedIn && <Auth />}
    </div>
  );
}

export default App;

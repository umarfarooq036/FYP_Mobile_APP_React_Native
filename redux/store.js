import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import cartReducer from "../redux/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

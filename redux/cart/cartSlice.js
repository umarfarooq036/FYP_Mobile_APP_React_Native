import { createSlice } from "@reduxjs/toolkit";
import { ToastAndroid } from 'react-native';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { userId } = action.payload;
      const productId = action.payload.product._id;
      const existingProductIndex = state.items.findIndex(
        (item) => item.product._id === productId && item.userId === userId
      );

      if (existingProductIndex !== -1) {
        ToastAndroid.show("Product already added to the Cart", ToastAndroid.SHORT);
        return;
      }
      
      state.items.push(action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload
      );
    },
  },
});

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ToastAndroid } from 'react-native';

const initialState = {
  items: [],
  quantities: {}
};

const cartSlice = createSlice({
  name: "CartPage",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        ToastAndroid.show("Product already added to the Cart", ToastAndroid.SHORT);
        return;
      }

      state.items.push(product);
      state.quantities[product.id] = 1;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(
        (item) => item.id !== productId
      );
      delete state.quantities[productId];
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      if (state.quantities[productId] !== undefined) {
        state.quantities[productId] += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      if (state.quantities[productId] !== undefined) {
        state.quantities[productId] = Math.max(0, state.quantities[productId] - 1);
      }
    },
    emptyCart: (state) => {
      state.items = [];
      state.quantities = {};
    }
  },
});

export const { addToCart, emptyCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartQuantities = (state) => state.cart.quantities;
export const selectTotalBill = (state) => {
  return state.items.reduce((total, item) => {
    const quantity = state.quantities[item.id] || 0;
    return total + (item.price * quantity);
  }, 0);
};

export default cartSlice.reducer;

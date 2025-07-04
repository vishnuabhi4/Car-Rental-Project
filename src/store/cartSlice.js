import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
  const newItem = action.payload;

  const existingItem = state.cartItems.find(item => item.id === newItem.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cartItems.push({
      id: newItem.id,
      title: newItem.title,
      price: newItem.price,
      image: newItem.image || "", 
      quantity: 1,
    });
  }
},
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice.js';
import authReducer from './authSlice';
import cartReducer from './cartSlice.js'

export const store = configureStore({
  reducer: { 
    auth: authReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});

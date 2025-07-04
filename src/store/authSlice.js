import { createSlice } from '@reduxjs/toolkit';



let storedUser = null;
try {
  const raw = localStorage.getItem('user');
  const parsed = JSON.parse(raw);
  
  if (parsed && parsed.username && parsed.token) {
    storedUser = parsed;
  }
} catch (e) {
  console.error("Failed to parse stored user:", e);
}


const initialState = {
  user: storedUser
};




const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

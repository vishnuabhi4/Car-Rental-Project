import { createSlice } from '@reduxjs/toolkit';

// Load saved dark mode from localStorage, default to false
const savedDarkMode = JSON.parse(localStorage.getItem('darkMode')) ?? false;

const initialState = {
  darkMode: savedDarkMode,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(state.darkMode)); 
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;

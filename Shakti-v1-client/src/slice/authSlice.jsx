// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Read initial state from local storage if available
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  accessToken: localStorage.getItem("accessToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      // Update local storage value when isLoggedIn state changes
      localStorage.setItem("isLoggedIn", action.payload);
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      // Update local storage value when accessToken state changes
      localStorage.setItem("accessToken", action.payload);
    },
  },
});

export const { setLoggedIn, setAccessToken } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAccessToken = (state) => state.auth.accessToken;
export default authSlice.reducer;

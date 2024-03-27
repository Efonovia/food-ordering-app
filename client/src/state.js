 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload.user;
    },

    addToCart: (state, action) => {
        state.user.cart = [...state.user.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      let prevCart = state.user.cart
      state.user.cart = prevCart.filter(item => item._id !== action.payload.id)
    },
  },
});

export const { setUser, addToCart, removeFromCart } = authSlice.actions;
export default authSlice.reducer; 
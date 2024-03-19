import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload.user;
    },

    setCart: (state, action) => {
        state.cart = action.payload.cart;
    },
  },
});

export const { setUser, setCart } = authSlice.actions;
export default authSlice.reducer; 
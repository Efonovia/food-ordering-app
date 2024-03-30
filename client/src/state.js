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

    changeItemQuantity: (state, action) => {
      const { id, value } = action.payload
      console.log(value)
      const itemIndex = state.user.cart.findIndex(item => item._id === id)

      if(itemIndex !== -1) {
        state.user.cart[itemIndex].quantity = value === 0 ? 1 : value
      }
    },

    clearCart: (state, action) => {
      state.user.cart = []
    },
  },
});

export const { setUser, addToCart, removeFromCart, clearCart, changeItemQuantity } = authSlice.actions;
export default authSlice.reducer; 
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "flipkart clone",
  initialState: {
    userData: {},
    products: [],
    cartItems: [],
    selectedproduct: {},
    selectedCategory: null,
  },

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSelectedProducts: (state, action) => {
      state.selectedproduct = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { setUserData, setProducts, setSelectedProducts,setSelectedCategory, setCartItems } =
  appSlice.actions;

export default appSlice.reducer;

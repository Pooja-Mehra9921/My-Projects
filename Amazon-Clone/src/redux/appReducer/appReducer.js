import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "flipkart clone",
  initialState: {
    userData: {},
    products: [],
    selectedproduct: {},
    selectedCategory: null,
    cartItem: [],
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
    setCartItem: (state, action) => {
      state.cartItem =  action.payload;
    }
  },
});

export const { setUserData, setProducts, setSelectedProducts,setSelectedCategory, setCartItem } =
  appSlice.actions;

export default appSlice.reducer;

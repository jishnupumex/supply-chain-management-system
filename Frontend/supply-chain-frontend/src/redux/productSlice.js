import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  cart:[]
};

export const productSlice=createSlice({
  name:'details',
  initialState,
  reducers:{
    setProducts:(state,action)=>{
      state.products=action.payload
    },
    setCart:(state,action)=>{
      state.cart=action.payload
    },
    addToCart:(state,action)=>{
      const item=state.cart.find(
        (item)=> item.prodId===action.payload.prodId
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.prodId === action.payload.prodId
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.prodId === action.payload.prodId
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.prodId !== action.payload
      );
    },
    resetCart: (state) => {
      state.cart = [];
    }
  }
});


export const {
  setProducts,
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = productSlice.actions;
export default productSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
  cart:[],
  orders:[],
  orderDetails:[]
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
    setOrders:(state,action)=>{
      state.orders=action.payload
    },
    setOrderDetails:(state,action)=>{
      state.orderDetails=action.payload
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
        item.prodQty++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.prodId === action.payload.prodId
      );
      if (item.prodQty === 1) {
        item.prodQty = 1;
      } else {
        item.prodQty--;
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
  setOrders,
  setOrderDetails
} = productSlice.actions;
export default productSlice;
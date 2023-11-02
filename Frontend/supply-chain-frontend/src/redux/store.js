import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
        details:productSlice.reducer
    }
});


export default store;
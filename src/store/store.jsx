import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productReducer from "./productSlice"
import generalReducer from "./generalSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        product : productReducer,
        general : generalReducer
    } 
})
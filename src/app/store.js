import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
    devTools:true,
    reducer: {
        cart:CartSlice,
        filter:filterSlice
    },
  })
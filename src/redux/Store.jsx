import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/cartItem'
import categoryItem from "./slices/categoryItem";
import searchItem from "./slices/searchItem";
const Store=configureStore({
    reducer:{
        cart: CartSlice,
        category:categoryItem,
        search: searchItem,

    },
})

export default Store;
import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../../Slice/productSlice'
import cartReducer from '../../Slice/cartSlice'


const rootReducer = {
    product : productReducer,
    cart : cartReducer
}

const store = configureStore({
    reducer : rootReducer
})


export default store
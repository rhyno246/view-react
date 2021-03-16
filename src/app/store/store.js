import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../../Slice/productSlice'
import cartReducer from '../../Slice/cartSlice'
import authReducer from '../../Slice/authSlice'


const rootReducer = {
    product : productReducer,
    cart : cartReducer,
    auth : authReducer
}

const store = configureStore({
    reducer : rootReducer
})


export default store
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export const getAllProduct = createAsyncThunk('product/getAllProduct',
    async () => {
        const allproduct = await productApi.getAll();
        return allproduct
    }
)

const productSlice = createSlice({
    name : 'product',
    initialState : {
        product : [],
        loading : false,
        error : ""
    },
    reducers : {
        
    },
    extraReducers  : {
        [getAllProduct.pending] : (state) => {
            state.loading = true
        },
        [getAllProduct.rejected] : (state , action) => {
            state.loading = false
            state.error = action.error
        },
        [getAllProduct.fulfilled] : (state, action) => {
            state.loading = false
            state.product = action.payload
        }
    }
})

const { reducer : productReducer  } = productSlice
export default productReducer
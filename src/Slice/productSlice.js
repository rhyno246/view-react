import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export const getAllProduct = createAsyncThunk('product/getAllProduct',
    async () => {
        const allproduct = await productApi.getAll();
        return allproduct
    }
)

export const getAllProductDetail = createAsyncThunk('product/getAllProductDetail', 
    async (id) => {
        const detailproduct = await productApi.getDetailProduct(id);
        return detailproduct
    }
)


const productSlice = createSlice({
    name : 'product',
    initialState : {
        product : [],
        detailproduct : [],
        loading : false,
        reRenderloading : true,
        error : ""
    },
    reducers : {
        
    },
    extraReducers  : {
        [getAllProduct.pending] : (state) => {
            state.loading = true
            state.reRenderloading = false
        },
        [getAllProduct.rejected] : (state , action) => {
            state.loading = false
            state.error = action.error
            state.reRenderloading = false
        },
        [getAllProduct.fulfilled] : (state, action) => {
            state.loading = false
            state.reRenderloading = false
            state.product = action.payload
        },

        
        [ getAllProductDetail.pending ] : (state) => {
            state.loading = true
        },
        [getAllProductDetail.rejected] : (state , action) => {
            state.loading = false
            state.error = action.error
        },
        [ getAllProductDetail.fulfilled ] : (state , action) => {
            state.loading = false
            state.detailproduct = action.payload
        }
    }
})

const { reducer : productReducer  } = productSlice
export default productReducer
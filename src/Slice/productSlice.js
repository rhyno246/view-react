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

export const getAllSearch = createAsyncThunk('product/getAllSearch' , 
    async (val) => {
        const search = await productApi.getSearch(val);
        return search
    }
)


const productSlice = createSlice({
    name : 'product',
    initialState : {
        product : [],
        detailproduct : [],
        search : [],
        loading : false,
        reRenderloading : true,
        reRenderSearchloading : true,
        searchTerm : "",
        error : "",
    },
    reducers : {
        // SearchItem : (state , action ) => {
        //     state.searchTerm = action.payload
        //     state.search = state.product.filter(search => {
        //         return search.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        //     })
        // }
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
        },



        [ getAllSearch.pending ] : (state) => {
            state.reRenderSearchloading = false
            state.loading = true
        },
        [ getAllSearch.rejected ] : (state , action) =>{
            state.reRenderSearchloading = false
            state.loading = false
            state.error = action.error
        },
        [ getAllSearch.fulfilled ] : (state , action) => {
            state.reRenderSearchloading = false
            state.loading = false
            state.search = action.payload
        }

    }
})

const { reducer : productReducer , actions  } = productSlice
export const { 
    hasCart
} = actions
export default productReducer
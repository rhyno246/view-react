import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";
export const getAllProduct = createAsyncThunk('product/getAllProduct',
    async () => {
        const allproduct = await productApi.getAll()
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
        const search = await productApi.getSearch(val)
        return search
    }
)

export const getAllOtherBrand = createAsyncThunk('product/getAllOtherBrand' , 
    async () => {
        const allotherbrand = await productApi.getAllOtherBrand()
        return allotherbrand
    }
)

export const getDetailOtherBrand = createAsyncThunk('product/getDetailOtherBrand',
    async (id) => {
        const detailotherbrand = await productApi.getDetailOtherBrand(id)
        return detailotherbrand
    }
)

export const getAllShoelace = createAsyncThunk('product/getAllShoelace' , 
    async () => {
        const shoelace = await productApi.getAllShoelace()
        return shoelace
    }
)

export const getDetailShoelace = createAsyncThunk('product/getDetailShoelace' ,
    async (id) => {
        const detailshoelace = await productApi.getDetailShoelace(id)
        return detailshoelace
    }
)


export const getProductMen = createAsyncThunk('product/getProductMen',
    async ( val) => {
        const allmen = await productApi.getProductMen(val)
        return allmen
    }
)


export const getProductWomen = createAsyncThunk('product/getProductWomen' , 
    async (val) => {
        const allwomen = await productApi.getProductWomen(val)
        return allwomen
    }
)


export const sortProduct = createAsyncThunk('product/sortProduct',
    async (val) => {
        const sort = await productApi.sortProduct(val)
        return sort
    }
)


export const filterProduct = createAsyncThunk('product/filterProduct' , 
    async (val) => {
        const filter = await productApi.filterProduct(val)
        return filter
    }
)

const productSlice = createSlice({
    name : 'product',
    initialState : {
        product : [],
        otherbrand : [],
        shoeslace : [],
        detailproduct : [],
        detailotherbrand : [],
        detailshoeslace : [],
        search : [],
        men : [],
        women : [],
        loading : false,
        reRenderloading : true,
        reRenderSearchloading : true,
        reRenderOtherBrandloading : true,
        reRenderShoelaceloading : true,
        reRenderMenloading : true,
        reRenderWomenloading : true,
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



        [getProductMen.pending] : (state) => {
            state.loading = true
            state.reRenderMenloading = false
        },
        [getProductMen.rejected] : (state , action) => {
            state.loading = false
            state.reRenderMenloading = false
            state.error = action.error
        },
        [getProductMen.fulfilled] : (state, action) => {
            state.loading = false
            state.reRenderMenloading = false
            state.men = action.payload
        },


        [getProductWomen.pending] : (state) => {
            state.loading = true
            state.reRenderWomenloading = false
        },
        [getProductWomen.rejected] : (state , action) => {
            state.loading = false
            state.reRenderWomenloading = false
            state.error = action.error
        },
        [getProductWomen.fulfilled] : (state, action) => {
            state.loading = false
            state.reRenderWomenloading = false
            state.women = action.payload
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
        },



        [ getAllOtherBrand.pending ] : (state) => {
            state.reRenderOtherBrandloading = false
            state.loading = true
        },
        [getAllOtherBrand.rejected] : (state, action) => {
            state.reRenderOtherBrandloading = false
            state.loading = false
            state.error = action.error
        },
        [getAllOtherBrand.fulfilled] : (state,action) => {
            state.reRenderOtherBrandloading = false
            state.loading = false
            state.otherbrand = action.payload
        },


        [getDetailOtherBrand.pending] : (state) => {
            state.loading = true
        },
        [getDetailOtherBrand.rejected] : (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [getDetailOtherBrand.fulfilled] : (state, action) => {
            state.loading = false
            state.detailotherbrand = action.payload
        },




        [getAllShoelace.pending] : (state) => {
            state.loading = true
            state.reRenderShoelaceloading = false
        },
        [getAllShoelace.rejected] : (state, action) => {
            state.reRenderShoelaceloading = false
            state.loading = false
            state.error = action.error
        },
        [getAllShoelace.fulfilled] : (state,action) => {
            state.reRenderShoelaceloading = false
            state.loading = false
            state.shoeslace = action.payload
        },




        [getDetailShoelace.pending] : (state) => {
            state.loading = true
        },
        [getDetailShoelace.rejected] : (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [getDetailShoelace.fulfilled] : (state, action) => {
            state.loading = false
            state.detailshoeslace = action.payload
        },


        [sortProduct.rejected] : (state, action) => {
            state.error = action.error
        },
        [sortProduct.fulfilled] : (state,action) => {
            state.product = action.payload
        },

        [filterProduct.rejected] : (state, action) => {
            state.error = action.error
        },
        [filterProduct.fulfilled] : (state,action) => {
            state.product = action.payload
        },
        
    }
})

const { reducer : productReducer , actions  } = productSlice
export const { 
    hasCart
} = actions
export default productReducer
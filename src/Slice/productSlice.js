import { createSlice } from "@reduxjs/toolkit";
const product = createSlice({
    name : 'product',
    initialState : {
        product : [],
        loading : false
    },
    reducers : {
        getAllProduct : (state , action ) => {
            state.product.push(action.payload)
        }
    },
})

const { reducer , actions } = product
export const { getAllProduct } = actions
export default reducer
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart : [],
        quantity : 0,
        total : 0
    },
    reducers : {
        AddToCart : (state , action ) => {
            //redux toolkit push arr not need create new arr
            const prodData = action.payload;
            const quantityProd = action.payload.quantityProd
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id)
            if(productIndex >= 0){
                state.cart[productIndex].quantity++;
                state.cart[productIndex].sizeChose = prodData.sizeChose;
            }else{
                const newarr = {
                    id : prodData.id,
                    title : prodData.title,
                    image : prodData.image,
                    price : prodData.price,
                    size : prodData.size,
                    sizeChose : prodData.sizeChose,
                    quantity : 1
                }
                state.cart.push(newarr) 
            }
            state.quantity++;
            state.total += prodData.price;
        },
        RemoveProductToCart : (state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            state.cart.splice(productIndex , 1);
            state.quantity -= cartData.quantity;
            state.total -= cartData.price * cartData.quantity;
        },
        plusCart : ( state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            cartData.quantity++;
            state.quantity++;
            state.total += cartData.price
        },


        dashItemCart : ( state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            if(cartData.quantity <= 1){
                return
            }
            cartData.quantity--;
            state.quantity--;
            state.total -= cartData.price
            
        },
        BlurInputCart : (state,action) => {
           const number = action.payload.number
           const id = action.payload.id
           const productIndex = state.cart.findIndex(arr => arr.id === id);
           const cartData = state.cart[productIndex]
           if(!number){
                return
           }else{
                cartData.quantity = number;
                
           }
        },

        SelectPrice : (state , action) => {
            state.changePrice = action.payload
        },

        removeAllCart : (state) => {
            state.cart = []
            state.quantity = 0
        },
    }
})

const { reducer , actions } = cartSlice
export const { 
    AddToCart ,
    RemoveProductToCart , 
    plusCart , 
    dashItemCart , 
    BlurInputCart ,
    removeAllCart , 
    SelectPrice 
} = actions
export default reducer
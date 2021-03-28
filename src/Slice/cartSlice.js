import { createSlice } from "@reduxjs/toolkit";
import Storage from '../untils/storage';

const cartStore = "cart_store"
const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart : Storage.get(cartStore , "[]"),
        quantity : 0,
        alertQuantity : "",
        total : 0
    },
    reducers : {
        //redux toolkit push arr not need create new arr
        AddToCart : (state , action ) => {
            const prodData = action.payload
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id)
            if(productIndex >= 0){
                if(state.cart[productIndex].quantity === prodData.stock){
                    state.alertQuantity = "Opps !! Max quantity"
                    return
                }
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
                    stock : prodData.stock,
                    quantity : 1
                }
                state.cart.push(newarr) 
            }
            state.quantity++;
            state.total += prodData.price;
            Storage.set(cartStore, JSON.stringify(state.cart), 60 * 24);
        },
        RemoveProductToCart : (state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            state.cart.splice(productIndex , 1);
            state.quantity -= cartData.quantity;
            state.total -= cartData.price * cartData.quantity;
            Storage.set(cartStore, JSON.stringify(state.cart), 60 * 24);
        },
        plusCart : ( state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            cartData.quantity++;
            state.quantity++;
            state.total += cartData.price
            Storage.set(cartStore, JSON.stringify(state.cart), 60 * 24);
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
            Storage.set(cartStore, JSON.stringify(state.cart), 60 * 24);
        },
        BlurInputCart : (state, action) => {
            /**
             * loop cart 
             * xu ly logic 
             * them thi cart tang len 
             * luc do list cart cung tang theo
             * thi bien tam se thay doi o day
             */

           const number = action.payload.number
           const id = action.payload.id
           const productIndex = state.cart.findIndex(arr => arr.id === id);
           const cartData = state.cart[productIndex]
           if(!number){
                return

           }else{
               /**
                * tim duoc product
                * sau do co duoc price cua san pham 
                * price * number = totalPrice cua item do
                * totalCart = totalCart + totalProduct 
                */
                cartData.quantity = number;
                
           }
        },
        removeAllCart : (state) => {
            state.cart = []
            state.quantity = 0
            Storage.remove(cartStore, JSON.stringify(state.cart), 60 * 24);
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
} = actions
export default reducer
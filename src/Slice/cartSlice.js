import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";
import Storage from '../untils/storage';


const cartStore = "cart_store"
const quantityStore = "quantity_store"
const totalStore = "total_store"
const checkoutStore = "checkout_store"
const checkoutAddress = "checkout_address"


export const getCountry = createAsyncThunk('product/getCountry',
    async () => {
        const dataAddress = await productApi.getCountry()
        return dataAddress
    }
)


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cart : Storage.get(cartStore, "[]"),
        quantity : parseInt(Storage.get(quantityStore, 0)),
        alertQuantity : "",
        total : parseInt(Storage.get(totalStore, 0)),
        checkout : Storage.get(checkoutStore, "[]"),
        address : Storage.get(checkoutAddress, "[]"),
        error : '',
        setAddress : ''
    },
    reducers : {
        //redux toolkit push arr not need create new arr
        AddToCart : (state , action ) => {
            const prodData = action.payload
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id)
            if(productIndex >= 0){
                if(state.cart[productIndex].quantity === prodData.stock){
                    alert("Opps !! Max quantity")
                    return
                }
                state.cart[productIndex].quantity++;
                state.cart[productIndex].sizeChose = prodData.sizeChose;
            }else{
                state.cart.push({
                    ...prodData,
                    stock : prodData.stock,
                    quantity : 1,
                }) 
            }
            state.quantity++;
            state.total += prodData.price;
            Storage.set(cartStore , JSON.stringify(state.cart) , 60 * 24)
            Storage.set(quantityStore , JSON.stringify(state.quantity) , 60 * 24)
            Storage.set(totalStore , JSON.stringify(state.total) , 60 * 24)
        },
        RemoveProductToCart : (state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            state.cart.splice(productIndex , 1);
            state.quantity -= cartData.quantity;
            state.total -= cartData.price * cartData.quantity;


            Storage.set(cartStore , JSON.stringify(state.cart) , 60 * 24)
            Storage.set(quantityStore , JSON.stringify(state.quantity) , 60 * 24)
            Storage.set(totalStore , JSON.stringify(state.total) , 60 * 24)
        },
        plusCart : ( state , action ) => {
            const prodData = action.payload;
            const productIndex = state.cart.findIndex(arr => arr.id === prodData.id);
            const cartData = state.cart[productIndex];
            cartData.quantity++;
            state.quantity++;
            state.total += cartData.price
            Storage.set(cartStore , JSON.stringify(state.cart) , 60 * 24)
            Storage.set(quantityStore , JSON.stringify(state.quantity) , 60 * 24)
            Storage.set(totalStore , JSON.stringify(state.total) , 60 * 24)
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
            Storage.set(cartStore , JSON.stringify(state.cart) , 60 * 24)
            Storage.set(quantityStore , JSON.stringify(state.quantity) , 60 * 24)
            Storage.set(totalStore , JSON.stringify(state.total) , 60 * 24)
        },
        BlurInputCart : (state, action) => {
            const number = action.payload.number
            const id = action.payload.id
            const productIndex = state.cart.findIndex(arr => arr.id === id);
            const cartData = state.cart[productIndex]
            //console.log(number);
            if(number > cartData.stock){
                return
            }else{
                
            }
        },
        removeAllCart : (state) => {
            state.cart = []
            state.quantity = 0
            state.total = 0
            state.checkout = []
            Storage.set(cartStore , JSON.stringify(state.cart) , 60 * 24)
            Storage.set(quantityStore , JSON.stringify(state.quantity) , 60 * 24)
            Storage.set(totalStore , JSON.stringify(state.total) , 60 * 24)
            Storage.set(checkoutStore , JSON.stringify(state.checkout) , 60 * 24)
        },


        changeSizeCart : (state , action) => {
            const data = action.payload
            const productIndex = state.cart.findIndex(arr => arr.id === data.id)
            state.cart[productIndex].sizeChose = data.val
            Storage.set(cartStore , JSON.stringify(state.cart) , 60 * 24)
        },

        checkOut : (state , action ) => {
            state.checkout = [...action.payload]
            Storage.set(checkoutStore , JSON.stringify(state.checkout) , 60 * 24)
        },
        setAddress : (state, action) => {
            state.setAddress = action.payload
        }
    },
    extraReducers : {
        [getCountry.rejected] : (state, action) => {
            state.error = action.error
        },
        [getCountry.fulfilled] : (state,action) => {
            state.address = action.payload
            Storage.set(checkoutAddress , JSON.stringify(state.address) , 60 * 24)
        },
    }
})

const { reducer : cartReducer , actions } = cartSlice
export const { 
    AddToCart ,
    RemoveProductToCart , 
    plusCart , 
    dashItemCart , 
    BlurInputCart ,
    removeAllCart , 
    checkOut,
    changeSizeCart,
    setAddress
} = actions
export default cartReducer
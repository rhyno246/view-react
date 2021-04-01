import { createSlice } from "@reduxjs/toolkit";
import Storage from '../untils/storage'

const auth = "auth"
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        nameAuth : "",
        setUser : Storage.get(auth, false),
        FormChangePass : null,
        wishList : []
    },
    reducers : {
        setNameAuth : (state , action) => {
            state.nameAuth = action.payload
        },
        setIsAuth : (state , action) => {
            state.setUser = action.payload
            Storage.set(auth, JSON.stringify(action.payload), 60 * 24 * 3)
        },
        setRemoveAuth : (state , action) => {
            state.setUser = action.payload
            state.wishList = null
            Storage.remove(auth, JSON.stringify(action.payload), 60 * 24 * 3)
        },
        setFormChangePass : ( state , action ) => {
            state.FormChangePass = action.payload
            //console.log(state.FormChangePass);
        },
        setWishlist : (state, action ) => {
            const newdata = action.payload
            if(newdata !== null){
                const index  = state.wishList.findIndex(arr => arr.id === newdata.id)
                if(index >= 0){
                    return 
                }
                state.wishList.unshift(newdata) 
            }
        }
    }
})

const { reducer : authReducer , actions } = authSlice
export const { setNameAuth, setIsAuth , setRemoveAuth , setFormChangePass , setWishlist } = actions
export default authReducer

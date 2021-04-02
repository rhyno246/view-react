import { createSlice } from "@reduxjs/toolkit";
import Storage from '../untils/storage'

const auth = "auth"
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        nameAuth : "",
        setUser : Storage.get(auth, false),
        FormChangePass : null,
        avatar : null
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
        setAvatar : (state , action) => {
            state.avatar = action.payload
        }
    }
})

const { reducer : authReducer , actions } = authSlice
export const { setNameAuth, setIsAuth , setRemoveAuth , setFormChangePass , setAvatar } = actions
export default authReducer

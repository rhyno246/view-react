import { createSlice } from "@reduxjs/toolkit";
import Storage from '../untils/storage'

const auth = "auth"
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        nameAuth : "",
        setUser : Storage.get(auth, false)
    },
    reducers : {
        setNameAuth : (state , action) => {
            state.nameAuth = action.payload
        },
        setIsAuth : (state , action) => {
            state.setUser = action.payload
            Storage.set(auth, JSON.stringify(action.payload), 60 * 24 * 3)
        }
    }
})

const { reducer : authReducer , actions } = authSlice
export const { setNameAuth, setIsAuth } = actions
export default authReducer

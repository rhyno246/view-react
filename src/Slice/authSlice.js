import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        isAuth : false,
    },
    reducers : {
        setAuth : (state , action) => {
            state.isAuth = action.payload
        }
    }
})

const { reducer : authReducer , actions } = authSlice
export const { setAuth } = actions
export default authReducer

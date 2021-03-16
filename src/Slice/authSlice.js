import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        isAuth : false,
    },
    reducers : {
 
    }
})

const { reducer : authReducer , actions } = authSlice
export const { authSignUp } = actions
export default authReducer

import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        isAuth : false,
        validateForm : {}
    },
    reducers : {
        setNullValidate : (state , action ) => {
            state.validateForm = action.payload
            console.log(state.validateForm)
        }
    }
})

const { reducer : authReducer , actions } = authSlice
export const { setNullValidate } = actions
export default authReducer

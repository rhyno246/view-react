import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name : 'auth',
    initialState :  {
        nameAuth : "",
    },
    reducers : {
        setNameAuth : (state , action) => {
            state.nameAuth = action.payload
        }
    }
})

const { reducer : authReducer , actions } = authSlice
export const { setNameAuth } = actions
export default authReducer

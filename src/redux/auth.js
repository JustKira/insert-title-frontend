import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import AxiosClient from "../Api/AxiosClient";

//Used To Get Auth tokens by logging in 

export const getAuth = createAsyncThunk('auth/getAuth',async (values) => {
    const option = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return AxiosClient(option).post('token/',JSON.stringify(values))
})

const authSlice = createSlice({
    name:"auth",
    initialState: {
        values: [],
        status: null
    },
    extraReducers: {
        [getAuth.pending]: (state,action) => {
            state.status = 'loading'
        },
        [getAuth.fulfilled]: (state,{payload}) => {
            state.status = 'success'
            state.values = payload
        },
        [getAuth.rejected]: (state,{payload}) => {
            state.status = 'failed'
            state.status_res = payload
        },
    }
})

export default authSlice.reducer;
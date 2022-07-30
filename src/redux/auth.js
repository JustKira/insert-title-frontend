import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import AxiosClient from "../Api/AxiosClient";
import userSlice from "./user";

//Used To Get Auth tokens by logging in 

export const getAuth = createAsyncThunk('auth/getAuth',async (values) => {
    const option = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return AxiosClient(option).post('token/',JSON.stringify(values))
})

export const getCreateUser = createAsyncThunk('auth/getCreateUser',async (values) => {
    const option = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return AxiosClient(option).post('register/',JSON.stringify(values))
})

const authSlice = createSlice({
    name:"auth",
    initialState: {
        values: [],
        status: null
    },
    extraReducers: {
        [getAuth.pending]: (state) => {
            state.status = 'loading'
        },
        [getAuth.fulfilled]: (state,{payload}) => {
            state.status = 'success'
            state.values = payload            
        },
        [getAuth.rejected]: (state,{payload}) => {
            state.status = 'failed'
            state.values = payload
        },

        //User Register
        [getCreateUser.pending]: (state) => {
            state.status = 'sending'
        },
        [getCreateUser.fulfilled]: (state,{payload}) => {
            state.status = 'success'
            state.values = payload
        },
        [getCreateUser.rejected]: (state,{payload}) => {
            state.status = 'failed'
            state.values = payload
        },
    }
})

export default authSlice.reducer;
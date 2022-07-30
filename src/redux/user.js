import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import AxiosClient from "../Api/AxiosClient"
import jwt_decode from "jwt-decode"

export const getUserData = createAsyncThunk('user/getUserData', async(obj,{getState}) => {

    let state = getState()
    const option = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return AxiosClient(option).get(`user/${jwt_decode(state.auth.values.data.refresh).id}`, {timeout: 100})
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        values: [],
        status: null
    },
    extraReducers: {
        [getUserData.pending]: (state) => {
            state.status = 'loading'
        },
        [getUserData.fulfilled]: (state, {payload}) => {
            state.status = 'success'
            state.values = payload
        },
        [getUserData.rejected]: (state, {payload}) => {
            state.status = 'failed'
            state.values = payload
        }
    }
})

export default userSlice.reducer;
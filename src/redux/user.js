import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser:null,
    isFetching:false,
    error:false,
    match:true,
    missingInput:false,
  },
  reducers: {
    //============login===========
    loginStart:(state)=>{
        state.isFetching=true;
        state.error=false;
    },
    loginSuccess:(state,action)=>{
        state.isFetching=false;
        state.currentUser=action.payload;
    },
    loginFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
    },
    //=======logout======
    logout: (state) => {
      state.currentUser = null;
    },
    //========register==========
    startRegistering:(state)=>{
      state.isFetching=true;
      state.error=false
      state.missingInput=false;
    },
    failRegistering:(state)=>{
      state.isFetching=false;
      state.error=true;
      state.match=true
    },
    //as default state to
    successRegistering:(state)=>{
      state.isFetching=false;
      state.error=false;
      state.match=true;
      state.missingInput=false;
      
    },
    passwordMatching:(state)=>{
      state.match=false
    },
    //missing input field case
    missing:(state)=>{
      state.missingInput=true
    },
  }
});

export const { loginStart,loginSuccess,loginFailure,logout,failRegistering,successRegistering,startRegistering,passwordMatching,missing } = userSlice.actions;
export default userSlice.reducer;
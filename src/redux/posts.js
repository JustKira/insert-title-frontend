import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    desc:'',
    isFetching:false,
    error:false,
  },
  reducers: {
    
    descriptionFetchStart:(state)=>{
        state.isFetching=true;
        state.error=false;
    },
    descriptionFetchSuccess:(state,action)=>{
        state.isFetching=false;
        state.desc=action.payload.description
        
    },
    descriptionFetchFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
    },
   
  }
});

export const { descriptionFetchFailure,descriptionFetchStart,descriptionFetchSuccess} = postsSlice.actions;
export default postsSlice.reducer;

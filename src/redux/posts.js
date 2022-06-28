import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    // addpost: (state, action) => {
    //   let incart=false
    //   state.products.find((prod)=>{if(prod._id===action.payload._id&&prod.color===action.payload.color&&prod.size===action.payload.size){incart=true} })
      
    //   if(incart)
    //   {state.products.map((item)=>
    //    {if(item._id===action.payload._id) {
    //     state.total += action.payload.price * action.payload.quantity
    //     item.quantity+=action.payload.quantity
    //    }
    //     }
    //   )}
    //   else{state.products.push(action.payload)
    //     state.total += action.payload.price * action.payload.quantity
    //     state.quantity += 1;}
    // },


//     deleteProduct:(state,action)=>{
//       state.products.map((item)=>
//    {   if(item._id===action.payload.id&&item.color===action.payload.color&&item.size===action.payload.size) 
//       {let index=state.products.indexOf(item)
//         state.products.splice(index,1);
//       }
//     })
//      state.total-=action.payload.price;
//      state.quantity-=1;
//     },
    


    searchProduct:(state,action)=>{
      
      state.items=(action.payload);

    },
    //resetting search array
    resetSearch:(state)=>{
      state.items=[]
    }
  },
});

export const { addProduct,deleteProduct,searchProduct,resetSearch } = cartSlice.actions;
export default cartSlice.reducer;
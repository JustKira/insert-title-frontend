//CreateAsyncThunk can be used to make fetch requests inside reducers
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
    //Name of reducer to call it
    name: "example_name",

    //initial values the reducer start with
    initialState: {
        value: []
    },

    //this is actions that change data
    reducers: {
        addExample: (state, action) => {
            state
                .value
                .push(action.payload)
        }
    }
})

//remeber to export actions and reducers
export const { addExample } = exampleSlice.actions;
export default exampleSlice.reducer;


//This is how you Get data is like MapPropToState
import {useSelector} from "react-redux";
//values of reducer is stored in example (or any other name)
const example = useSelector((state) => state.example_name.value)

//Used to call actions 
const dispatch = useDispatch()
//for example () => dispatch(addExample({data:data,data1:data1}))

//ref https://www.youtube.com/watch?v=bml92jhF4t8
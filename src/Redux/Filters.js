import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    filterData:[],

}

const filter = createSlice({
    name:"filter",
    initialState,
    reducers:{
        addFilter(state,action){
                state.filterData.push(action.payload)
              
        },
      
    }
})


export const { addFilter } = filter.actions;
export default filter.reducer
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data:[],
    url:["trending/all/day" ,"discover/movie","movie/top_rated"]
   
}

const slice = createSlice({
    name:"Links",
    initialState,
    reducers:{
        addLink(state,action){
                state.data.push(action.payload)
                if(state.data.length>1){
                     state.data.shift()
                }
                
        
           
           
            console.log(state.data.length);
        },
      
    }
})


export const { addLink } = slice.actions;
export default slice.reducer
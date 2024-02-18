import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mymovie:[],  
}

const WatchList = createSlice({
    name:"WatchList",
    initialState,
    reducers:{
        addMovie(state,action){
              
              const existingItem = state.mymovie.find((item) => item.id === action.payload.id);
              if(!existingItem){
                state.mymovie.push(action.payload)
              }
                   
              console.log(existingItem)

        },
        removeMovie(state, action) {
            const existingItemIndex = state.mymovie.findIndex((item) => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                // Use splice to remove the item from the array in place
                state.mymovie.splice(existingItemIndex, 1);
            }
        }
      
    }
})


export const { addMovie,removeMovie } = WatchList.actions;
export default WatchList.reducer
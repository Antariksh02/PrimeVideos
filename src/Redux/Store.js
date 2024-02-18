import { configureStore } from "@reduxjs/toolkit";
import slice from "./CreateSlice";
import WatchListSlice from "./WatchListSlice";
import filter from "./Filters";

const Store = configureStore({
    reducer:{
        link : slice,
        movies:WatchListSlice,
        filters:filter,
    }
})
export default Store;
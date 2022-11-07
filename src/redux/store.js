import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import parkingApiSlice from "./features/ParkingApiSlice";

const store= configureStore({
    reducer:{
        parkingApiData:parkingApiSlice.reducer,        
    },
    middleware:[...getDefaultMiddleware()],

})


export default store;
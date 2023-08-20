import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tabSliceSlice";


export const store= configureStore({
    reducer:{
        tab :tabSlice
    },})

import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./slices/navbarslice";

const store = configureStore({
    reducer: navbarSlice.reducer
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import GPTSlice from "./GPTSlice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        GPT:GPTSlice
    }
})

export default appStore
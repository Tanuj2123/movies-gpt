import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name:"GPT",
    initialState:{
        GPTSearch:false,
        GPTMovies:null
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.GPTSearch = !state.GPTSearch
        },
        addGPTMovies:(state,action)=>{
            state.GPTMovies = action.payload
        }
    }
});

export const {toggleGPTSearch,addGPTMovies} = GPTSlice.actions;

export default GPTSlice.reducer;
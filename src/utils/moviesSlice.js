import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state,action)=>{
            state.trailerVideo = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
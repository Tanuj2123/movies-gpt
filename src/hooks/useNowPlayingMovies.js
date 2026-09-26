import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
   const dispatch = useDispatch();

   const nowPlayingMovies = useSelector(state=>state.movies.nowPlayingMovies);


  const getMovies = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN",API_OPTIONS);

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    !nowPlayingMovies && getMovies();
  },[]);
}

export default useNowPlayingMovies;
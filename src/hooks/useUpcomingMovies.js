import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = ()=>{

    const dispatch = useDispatch();

    const fetchUpComingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1&region=IN', API_OPTIONS);

        const json = await data.json();

        dispatch(addUpcomingMovies(json?.results));
    }

    useEffect(()=>{
        fetchUpComingMovies();
    },[])


}

export default useUpcomingMovies;
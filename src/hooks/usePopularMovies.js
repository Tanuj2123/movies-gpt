import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = ()=>{

    const dispatch = useDispatch();
    const popularMovies = useSelector(state=>state.movies.popularMovies);

    const fetchPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?region="IN"&page=1', API_OPTIONS);

        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    }

    useEffect(()=>{
        !popularMovies && fetchPopularMovies();
    },[]);


}

export default usePopularMovies;
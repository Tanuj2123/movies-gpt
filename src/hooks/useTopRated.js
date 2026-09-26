import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRated = ()=>{

    const dispatch = useDispatch();
    const topRatedMovies = useSelector(state=>state.movies.topRated);

    const fetchTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?lregion=IN&page=1', API_OPTIONS);

        const json = await data.json();

        dispatch(addTopRated(json?.results));
    }

    useEffect(()=>{
        !topRatedMovies && fetchTopRatedMovies();
    },[]);

}

export default useTopRated;
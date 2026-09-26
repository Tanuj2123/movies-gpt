import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useFetchMovieVideos = (movieId)=>{

  const dispatch = useDispatch();
  const trailerVideo = useSelector(state=>state.movies.trailerVideo);

  const fetchMovieVideos = async (movieId)=>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const videoData = json.results;

    const filteredVideos = videoData.filter((video)=> video.type==="Trailer");
    const trailer = filteredVideos.length?filteredVideos[0]:videoData[0]
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    !trailerVideo && fetchMovieVideos(movieId);
  },[movieId])
}

export default useFetchMovieVideos;
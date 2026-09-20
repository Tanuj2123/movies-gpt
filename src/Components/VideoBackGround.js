import useFetchMovieVideos from "../hooks/useFetchMovieVideos"
import { useSelector } from "react-redux";
const VideoBackGround = ({movieId}) => {

  const {trailerVideo} = useSelector((state)=>state.movies);
  
  useFetchMovieVideos(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`} title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackGround
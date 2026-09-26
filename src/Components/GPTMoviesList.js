import { useSelector } from "react-redux"
import MovieCard from "./MovieCard";


const GPTMoviesList = () => {
  const GPTMovies = useSelector(state=>state.GPT.GPTMovies);

  if(!GPTMovies) return;


  return (
    <div className="flex flex-wrap">
      {GPTMovies.map((ListOne)=>ListOne.map(movie => <MovieCard key={movie.id} imageId={movie?.poster_path}/>))}
    </div>
  )
}

export default GPTMoviesList
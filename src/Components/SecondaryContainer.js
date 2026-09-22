import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies);

  if(!movies.nowPlayingMovies || !movies?.popularMovies || !movies?.topRated || !movies?.upcomingMovies) return;
  return (
    <div className="bg-black">
      <div className="relative -mt-32">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies?.topRated}/>
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
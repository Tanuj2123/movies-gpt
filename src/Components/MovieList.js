import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {
  return (
    <div className="pl-12">
        <h1 className="text-3xl p-2 m-2 text-white ">{title}</h1>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {movies.map((movie)=>{
                return <MovieCard key={movie.id} imageId={movie?.poster_path}/>
            })}
        </div>
    </div>
  )
}

export default MovieList
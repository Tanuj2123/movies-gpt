import { IMAGE_BASE_URL } from "../utils/constants"


const MovieCard = ({imageId}) => {
  return (
     <img  className="w-48 p-2 m-2 "alt="movie-poster" src={IMAGE_BASE_URL+imageId}></img>
  )
}

export default MovieCard;
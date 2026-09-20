import { useSelector } from "react-redux"
import VideoBackGround from "./VideoBackGround"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {

    const {nowPlayingMovies} = useSelector((state)=> state.movies)

    if(!nowPlayingMovies) return;

    const mainMovie = nowPlayingMovies[0];
    const {title,overview,id} = mainMovie;
  return (
    <div className="relative -z-40 bg-gradient-to-r from-black">
        <VideoBackGround movieId={id}/>
        <VideoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer
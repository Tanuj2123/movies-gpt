import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const GPT = useSelector(state=>state.GPT)
  

  return (
    <div className="">
      <Header/>
      {GPT.GPTSearch ? <GPTSearch/>:<><MainContainer/>
      <SecondaryContainer/></>}
    </div>
  )
}

export default Browse;

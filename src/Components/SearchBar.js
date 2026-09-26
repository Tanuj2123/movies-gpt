import { useRef } from "react"
import client from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/GPTSlice";


const SearchBar = () => {

  const dispatch = useDispatch();

  const searchText = useRef(null);

  const handleClick = async ()=>{
    console.log(searchText.current.value);

    //fetch movies suggested by gpt from tmdb
    const fetchGPTMovies = async (movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const json = await data.json();

        return json?.results;
    }

    const response = await client.responses.create({
      model: 'gpt-6-luna',
      instructions: 'You are a movie recommdendation assistant and based on the input suggest 5 movies if the user asked based on genre and if the input a particular movie name then suggest only that particular movie give the output result only the movie names with comma seperated as the example, example input : Indian movies -> output pushpa2,dangal,paradise,salaar,bahubali ; example input bahubali: bahubali',
      input: searchText.current.value,
    });

    const gptMoviesList = response.output_text.split(",");

    const promiseArray = gptMoviesList.map((movie)=>fetchGPTMovies(movie));

    const tmdbMoviesList = await Promise.all(promiseArray);


    dispatch(addGPTMovies(tmdbMoviesList));
    

  }
  return (
    <div className="flex justify-center pt-[10%]">
      <form className="w-1/2 ml-60" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder="What do you want to watch today ?" className="w-1/2 px-4 py-2 border border-black rounded-lg" 
        ref={searchText}></input>
        <button className="rounded-lg px-4 py-2 mx-2 bg-red-600 text-white" onClick={handleClick} >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
import GPTMoviesList from "./GPTMoviesList"
import SearchBar from "./SearchBar"


const GPTSearch = () => {
  return (
    <div className="bg-gradient-to-b from-[#141414]  to-[#232526] h-screen">
        <SearchBar/>
        <GPTMoviesList/>
    </div>
  )
}

export default GPTSearch
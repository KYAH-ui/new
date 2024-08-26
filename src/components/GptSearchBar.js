import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

const searchMovieTMDB = async(movie) =>{
  const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
  const json = await data.json();
  return (json.results);
};

  const handleGptSearchClick = async() => {
  console.log(searchText.current.value);
  
  const gptQuery= "Act as a Movie Recommendation system and suggests some movies for the query : " + searchText.current.value + "only give me name of 5 movies, comma separated like the example result given ahead. Example result : gadar, It ends with us , fighter , stree2 , sholay";

  const gptResults = await openai.completions.create({
    messages: [{ role: 'user', content:gptQuery }],
    model: 'gpt-4o-mini',
  });
  console.log(gptResults.choices?.[0]?.message?.content);

  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  };


  return (
    <div className="pt-[10%] flex justify-center">
<form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>;
<input ref = {searchText} type="text" className = "p-2 m-2 flex col-span-9 flex" placeholder={lang[langkey].gptSearchPlaceholder}/>
<button className="col-span-3 m-1 py-0 px-1 mx-0 bg-red-800 text-white flex rounded-lg"onClick={handleGptSearchClick}>
    {lang[langkey].search}
</button>
</form></div>
  );
};

export default GptSearchBar;
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

 // fetch data from TMDB site and updating the store
 const usePopular = () => {
 const dispatch = useDispatch();

 const getPopularMovies = async () => {
   const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
   const json = await data.json();
   dispatch(addPopularMovies(json.results));
 };
 useEffect(() => {
   getPopularMovies();
 } , [] )};
 
 export default usePopular;
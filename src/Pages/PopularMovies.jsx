import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const PopularMovies = () => {
  const [getMovies, setGetMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c"
        );
        setGetMovies(res.data.results);
      } catch (err) {
        console.log(err);
        alert(
          !navigator.onLine
            ? "You are offline. Please check your internet connection."
            : "Failed to fetch movies. Please try again later."
        );
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className=" my-[200px]">
      <div className=" flex flex-col gap-[10px]">
        <h1 className="text-[30px] text-left"> Popular Movies List </h1>
        <div className="popular_container flex flex-wrap gap-y-[50px] gap-x-[30px] justify-start">
          {getMovies?.map((List, i) => (
            <div
              key={i}
              className=" moviebox flex flex-col flex-wrap border rounded-2xl border-transparent"
            >
              <img
                src={`https://image.tmdb.org/t/p/w185${List.poster_path}`}
                alt={List.title}
              />
              {List.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PopularMovies;

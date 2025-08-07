import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const TopRatedMovies = () => {
  const [getMovies, setGetMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c"
    );
    console.log(res.data.results);
    setGetMovies(res.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className=" flex flex-col gap-[10px]">
        <h1 className="text-[30px] text-left"> Top Rated Movies List </h1>
        <div className="top_rated_container flex flex-wrap gap-y-[50px] gap-x-[30px] justify-start">
          {getMovies?.map((List, i) => (
            <div
              key={i}
              className=" moviebox flex flex-col flex-wrap border rounded-2xl border-transparent "
            >
              <img src={`https://image.tmdb.org/t/p/w185${List.poster_path}`} />
              {List.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;

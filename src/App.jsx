// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PopularMovies from "./Pages/PopularMovies";
import TopRatedMovies from "./Pages/TopRatedMovies";

function App() {
  return (
    <>
      <div className=" flex flex-col gap-[100px]">
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </>
  );
}

export default App;

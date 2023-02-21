import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "react-dropdown/style.css";
import GetMovies from "./getMovies";

const Nav = ({ setMovies, setloading, fetchMovies, setError }) => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchUrl, setSearchUrl] = useState("")

  const options = ["2019", "2020", "2021", "2022", "2023"];

  const api_key = process.env.REACT_APP_API_KEY;
  let search_url =
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=` +
    search +
    "&page=1&include_adult=false";

  const genres = ["Comedy", "Kids", "Drama"];

  let serach_term = "";
  const getData = async (movieType) => {
    if (movieType == "Comedy") {
      serach_term = `https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=48f71393228ae8b29caa11339fef50b9`;
    }
    if (movieType == "Kids") {
      serach_term = `https://api.themoviedb.org/3//discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=48f71393228ae8b29caa11339fef50b9`;
    }
    if (movieType == "Drama") {
      serach_term = `https://api.themoviedb.org/3//discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=48f71393228ae8b29caa11339fef50b9`;
    }
    const response = GetMovies(serach_term, setError, setloading);
    response.then((value) => setMovies(value.results));
  };
  const getYear = async (year) => {
    search_url = `https://api.themoviedb.org/3/discover/movie?api_key=48f71393228ae8b29caa11339fef50b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=${year}`;
    const response = GetMovies(search_url, setError, setloading);
    response.then((value) => setMovies(value.results))
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = GetMovies(search_url, setError, setloading);
    response.then((value) => setMovies(value.results));
    setSearch("");
  };

  return (
    <section className="fixed w-full h-14 bg-[#000000dc] ">
      <nav className="flex relative justify-between flex-wrap mx-6 sm:mx-10 items-center pt-2">
        <div className="sm:flex gap-12 text-white items-center cursor-pointer">
          <h1 className="sm:text-2xl text-lg" onClick={fetchMovies}>
            Elite Movies
          </h1>
          <ul className="md:flex hidden gap-4">
            {genres.map((option, index) => (
              <li className="nav-item" key={index}>
                <button name={option} onClick={(e) => getData(e.target.name)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex">
            <Dropdown
              options={options}
              placeholder="filter by year"
              onChange={(option) => getYear(option.value)}
            />
          </div>
        </div>

        <div
          className={`absolute md:hidden flex -bottom-32 ${
            menuOpen ? "" : "hidden"
          }  border-2 bg-[#000000dc] border-[#000000dc] p-2 md:flex flex-col gap-4 right-0`}
        >
          <div
            className={`text-white bg-red-400  ${menuOpen ? "" : "hidden"} `}
          >
            <Dropdown
              options={genres}
              value={genres[0]}
              onChange={(option) => getData(option.value)}
              placeholder="filter by genres"
            />
          </div>
          <div className={`text-white bg-red-400 ${menuOpen ? "" : "hidden"} `}>
            <Dropdown
              options={options}
              placeholder="filter by year"
              onChange={(option) => getYear(option.value)}
            />
          </div>
        </div>
        <div>
          <form action="" onSubmit={(e) => handleSearch(e)}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter your movie search"
              value={search}
              type="text"
              className="w-32 md:w-48 rounded-sm outline-none px-2"
            />
          </form>
        </div>
        <div
          className="cursor-pointer flex md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <AiOutlineClose color="white" />
          ) : (
            <GiHamburgerMenu color="white" />
          )}
        </div>
      </nav>
    </section>
  );
};

export default Nav;

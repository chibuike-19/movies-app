import React, { useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import "react-dropdown/style.css";

const Nav = ({ setMovies, setloading, fetchMovies }) => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false)
  const options = ["one", "two", "three"]

  const search_url =
    "https://api.themoviedb.org/3/search/movie?api_key=48f71393228ae8b29caa11339fef50b9&language=en-US&query=" +
    search +
    "&page=1&include_adult=false";
  const handleSearch = async (e) => {
    e.preventDefault();
    setloading(true);
    const response = await axios(search_url);
    console.log(response);
    setloading(false)
    setMovies(response.data.results);

    setSearch("");
  };
  return (
    <section className="fixed w-full h-14 bg-[#000000dc] ">
      <nav className="flex relative justify-between flex-wrap mx-6 sm:mx-10 items-center pt-2">
        <div className="sm:flex gap-24 text-white items-center cursor-pointer">
          <h1 className="sm:text-2xl text-lg" onClick={fetchMovies}>
            Elite Movies
          </h1>
          <ul className="sm:flex hidden gap-8">
            <li className=" relative before:content-[''] before:absolute hover:before:w-full before:-bottom-1 before:left-0 before:h-1 before:transition-all before:w-0 transform -translate-x-1/2 before:bg-[#610303] focus:before:w-full">
              Comedy
            </li>
            <li className=" relative before:content-[''] before:absolute before:-bottom-1 hover:before:w-full before:left-0 before:h-1 before:w-0  transform -translate-x-1/2   before:bg-[#610303] focus:before:w-full">
              Tragedy
            </li>
            <li className="relative  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-0 hover:before:w-full  transform -translate-x-1/2   before:bg-[#610303]  focus:before:w-full">
              Action
            </li>
            <li></li>
          </ul>
          <Dropdown options={options} />
        </div>

        <div
          className={`text-white bg-red-400 absolute -bottom-16 ${
            menuOpen ? "" : "hidden"
          } right-0 `}
        >
          <Dropdown options={options} />
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
          className="cursor-pointer flex sm:hidden"
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

import React from "react";
import { Link } from "react-router-dom";

const MoviesCard = ({ movies }) => {
  const img = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={`/movies/${movies.id}`}>
      <div className="overflow-hidden border-b-2 mb-3 sm:h-full cursor-pointer">
        <img
          src={img + movies.poster_path}
          alt=""
          className="object-cover h-[22rem] w-full"
        />
        <div className="flex justify-between bg-[#f13e3e] items-center px-1 h-12 sm:h-20">
          <div className="text-lg">{movies.title}</div>
          <div className="border-2 border-red-700 bg-red-700 rounded-full p-1 sm:p-2">
            {movies.vote_average}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoviesCard;

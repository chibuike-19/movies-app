import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import MoviesCard from "./MoviesCard";

const Movies = ({ movies, loading, error }) => {
  return (
    <div className="pt-16 bg-[#000000dc]">
      {loading ? (
        <div className="h-screen grid place-content-center">
          <Loader loading={loading} />
        </div>
      ) : (
        <>
          {error ? (
            <div className="h-screen text-[#f13e3e] grid place-content-center text-xl">
              {error && <p>Oops, {error}</p>}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:mx-2 mx-4 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {movies.length == 0 ? (
                <div className="grid place-content-center h-screen w-screen">
                  <p className="text-lg text-[#f13e3e]">
                    Sorry, this movie doesn't exist in our database{" "}
                  </p>
                </div>
              ) : (
                movies.map((movie, index) => (
                  <MoviesCard movies={movie} key={index} />
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Movies;

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {MdKeyboardBackspace} from "react-icons/md"
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";

const MovieDetail = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=48f71393228ae8b29caa11339fef50b9&language=en-US`;

  const img = "https://image.tmdb.org/t/p/w500";

  const FetchMovies = async () => {
    const response = await axios(movie_url);
    console.log(response.data);
    setLoading(false);
    setResult(response.data);
  };
  useEffect(() => {
    FetchMovies();
  }, [id]);
  return (
    <div className="pt-4 bg-[#241f1f] sm:h-screen  px-2 pb-6 ">
      <Link to="/">
        <div className="flex items-center text-[#f13e3e] gap-1 p-2 cursor-pointer">
          <MdKeyboardBackspace />
          <span className="">Go back </span>
        </div>
      </Link>
      {loading ? (
        <div className="grid place-content-center h-screen">
          <Loader />
        </div>
      ) : (
        <section>
          <div className="sm:flex justify-between text-[#f13e3e] gap-12">
            <div className="">
              <img src={img + result.poster_path} alt={result.title} />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-2">{result.title}</h1>
              <h2 className="font-semibold text-lg">Movie Summary</h2>
              <p className="text-white">{result.overview}</p>
              <div className="pt-6">
                <p>
                  Movie Rating: <span className="text-white">{result.vote_average}</span>
                </p>
                <p>
                  Release Date: <span className="text-white">{result.release_date}</span>
                </p>
                <p>
                  Genres:{" "}
                  <span className="text-white">
                    {result.genres.map((genre) => (
                      <span>
                        {genre.name}
                        {","}{" "}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MovieDetail;

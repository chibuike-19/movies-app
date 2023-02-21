import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import MovieDetail from "./components/movieDetail";
import axios from "axios";
import { base_url } from "./components/getMovies";
import { useState, useEffect } from "react";
import GetMovies from "./components/getMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const search = "/discover/movie?sort_by=popularity.desc";
  const api_key = "&api_key=" + process.env.REACT_APP_API_KEY;

  const main_url = base_url + search + api_key;

  const FetchMovies = async () => {
    const response = GetMovies(main_url, setError, setLoading);
    response.then((value) => setMovies(value.results))
  };

  useEffect(() => {
    FetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setMovies={setMovies}
              setLoading={setLoading}
              FetchMovies={FetchMovies}
              setError={setError}
              error={error}
              movies={movies}
              loading={loading}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

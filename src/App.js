import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home';
import MovieDetail from './components/movieDetail';
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true);

        const search = "/discover/movie?sort_by=popularity.desc";
        const api_key = "&api_key=48f71393228ae8b29caa11339fef50b9";
        const base_url = "https://api.themoviedb.org/3";

        const main_url = base_url + search + api_key;

        const FetchMovies = async () => {
          const response = await axios(main_url);
          console.log(response);
          setLoading(false);
          setMovies(response.data.results);
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
              movies={movies}
              loading={loading}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieDetail movies={movies}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import Movies from "./movies";
import Nav from "./nav";

const Home = ({setLoading, setMovies, FetchMovies, movies, loading}) => {

  return (
    <div>
      <Nav
        setMovies={setMovies}
        setloading={setLoading}
        fetchMovies={FetchMovies}
      />
      <Movies movies={movies} loading={loading} />
    </div>
  );
}

export default Home
import React from 'react'
import Movies from "./movies";
import Nav from "./nav";

const Home = ({setLoading, setMovies, FetchMovies, movies, loading, error, setError}) => {

  return (
    <div>
      <Nav
        setMovies={setMovies}
        setError={setError}
        setloading={setLoading}
        fetchMovies={FetchMovies}
      />
      <Movies movies={movies} loading={loading} error={error}/>
    </div>
  );
}

export default Home
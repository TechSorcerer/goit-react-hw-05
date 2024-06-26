import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/moviesAPI";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default HomePage;

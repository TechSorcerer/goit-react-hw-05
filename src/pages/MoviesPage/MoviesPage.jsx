import { useState, useEffect } from "react";
import { searchMovies } from "../../services/moviesAPI";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;

    setSearchParams({ query: searchQuery });
    navigate(`/movies?query=${searchQuery}`);
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default MoviesPage;

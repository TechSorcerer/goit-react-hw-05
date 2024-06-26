import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

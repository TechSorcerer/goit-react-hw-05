import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/moviesAPI";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.item}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
            className={styles.image}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;

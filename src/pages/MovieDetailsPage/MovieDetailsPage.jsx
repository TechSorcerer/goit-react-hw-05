import { useEffect, useState, useRef, Suspense } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/moviesAPI";
import { HashLoader } from "react-spinners";
import styles from "./MovieDetailsPage.module.css";

const override = {
  display: "block",
  margin: "200px auto",
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const backRef = useRef(location.state?.from || `/movies${location.search}`);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const handleGoBack = () => {
    navigate(backRef.current);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.button}>
        Go back
      </button>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <p>{movie.overview}</p>
      <ul className={styles.list}>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense
        fallback={<HashLoader cssOverride={override} color={"#FE5F55"} />}
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

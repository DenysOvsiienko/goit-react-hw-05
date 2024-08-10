import { Link, useLocation } from "react-router-dom";
import moviePosterDefault from "../../img/movie-poster-blank.svg";
import css from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const location = useLocation();
  return (
    <Link className={css.movieCard} to={`/movies/${movie.id}`} state={location}>
      <div className={css.imgWrapper}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : moviePosterDefault
          }
          alt={movie.title}
        />
      </div>
      <h3 className={css.title}>{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;

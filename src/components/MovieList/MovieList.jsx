import css from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => {
        return (
          <li className={css.movieListItem} key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

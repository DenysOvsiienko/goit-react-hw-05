import { Link } from "react-router-dom";
import moviePosterDefault from "../../img/movie-poster-blank.svg";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <div className={css.overlay}></div>
      <div className={css.notFoundContainer}>
        <p className={css.notFoundText}>Page not found</p>
        <Link to="/" className={css.returnHomeLink}>
          Return to Homepage
        </Link>
      </div>
      <ul className={css.notFoundList}>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
        <li className={css.notFoundMovie}>
          <img src={moviePosterDefault} alt="Not found" />
        </li>
      </ul>
    </>
  );
};

export default NotFoundPage;

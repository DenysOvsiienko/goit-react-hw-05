import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../js/tmdb-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";
import defaultAvatar from "../../img/default-avatar.svg";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovieCreditsData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        setCasts(data.cast);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCreditsData();
  }, [movieId]);

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {casts.length > 0 ? (
        <ul className={css.castList}>
          {casts.map((cast) => {
            return (
              <li key={cast.cast_id} className={css.castListItem}>
                <img
                  className={css.castImg}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                      : defaultAvatar
                  }
                  alt={cast.name}
                />
                <div className={css.infoContainer}>
                  <p className={css.castName}>{cast.name}</p>
                  <p className={css.castCharacter}>
                    Character: {cast.character}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.castName}>There are no casts</p>
      )}
    </>
  );
};

export default MovieCast;

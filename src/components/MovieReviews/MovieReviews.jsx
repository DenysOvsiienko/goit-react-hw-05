import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../js/tmdb-api";
import Moment from "moment";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";
import defaultAvatar from "../../img/default-avatar.svg";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovieReviewsData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviewsData();
  }, [movieId]);
  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map((review) => {
            return (
              <li key={review.id} className={css.reviewListItem}>
                <img
                  className={css.reviewImg}
                  src={
                    review.author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                      : defaultAvatar
                  }
                  alt={review.author}
                />
                <div className={css.infoContainer}>
                  <p className={css.reviewAuthor}>
                    {review.author}&nbsp;
                    <span>
                      (user rating:&nbsp;
                      {review.author_details.rating
                        ? review.author_details.rating
                        : "unrated"}
                      )
                    </span>
                  </p>
                  <p className={css.reviewPublishDate}>
                    Created at:{" "}
                    {Moment(review.created_at).format("MMMM Do YYYY")}
                  </p>
                  <p className={css.reviewContent}>{review.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.reviewAuthor}>There are no reviews</p>
      )}
    </>
  );
};

export default MovieReviews;

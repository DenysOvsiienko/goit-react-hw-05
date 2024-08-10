import { useState, useEffect } from "react";
import { getWeeklyTrendingMovies } from "../../js/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getWeeklyTrendingMoviesData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getWeeklyTrendingMovies();
        setTrendMovies(data.results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getWeeklyTrendingMoviesData();
  }, []);

  return (
    <div className={css.homePageContainer}>
      {isError && <ErrorMessage />}
      <h2 className={css.title}>Weekly trending movies</h2>
      {isLoading && <Loader />}
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default HomePage;

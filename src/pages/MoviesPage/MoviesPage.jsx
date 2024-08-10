import { getMovieByQuery } from "../../js/tmdb-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import PaginationNextBtn from "../../components/PaginationNextBtn/PaginationNextBtn";
import PaginationPrevBtn from "../../components/PaginationPevBtn/PaginationPrevBtn";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const query = searchParams.get("query") ?? "";
  const page = searchParams.get("page") ?? "";

  useEffect(() => {
    if (query === "") return;
    async function getMovieByQueryData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getMovieByQuery(query, page);
        setFoundMovies(data.results);
        setTotalPages(data.total_pages);
        setIsLoadMore(data.total_pages >= page);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieByQueryData();
    setSearchParams({ query, page });
  }, [query, page, setSearchParams]);

  const handleSearch = (newQuery) => {
    setSearchParams({
      query: newQuery,
      page: 1,
    });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ query, page: newPage });
  };

  return (
    <>
      <MovieSearchForm onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <MovieList movies={foundMovies} />
      {isLoadMore && (
        <div className={css.paginationBtnContainer}>
          {page > 1 && (
            <PaginationPrevBtn
              onBtnClick={handlePageChange}
              page={Number(page)}
            />
          )}
          {totalPages > page && (
            <PaginationNextBtn
              onBtnClick={handlePageChange}
              page={Number(page)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default MoviesPage;

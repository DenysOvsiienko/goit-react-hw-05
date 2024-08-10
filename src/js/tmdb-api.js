import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTA1MzZkNDdhOTFmMzNmMjhhOGZjN2QxZTk5YTM0YSIsIm5iZiI6MTcyMjk3MzU3Mi4zMDYxNzMsInN1YiI6IjY2YjBhOGVjYzc1ZGIyYmViOGY4Mjk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ISgbntFxqmzOWpcDaJmVDXzJ4B7BLFqV-cjw2OCnMws",
  },
});

export async function getWeeklyTrendingMovies() {
  const { data } = await tmdbApi.get("trending/movie/week");
  return data;
}

export async function getMovieByQuery(query, page) {
  const params = {
    query,
    page,
  };
  const { data } = await tmdbApi.get("search/movie", { params });
  return data;
}

export async function getMovieDetails(movie_id) {
  const { data } = await tmdbApi.get(`movie/${movie_id}`);
  return data;
}

export async function getMovieCredits(movie_id) {
  const { data } = await tmdbApi.get(`movie/${movie_id}/credits`);
  return data;
}

export async function getMovieReviews(movie_id) {
  const { data } = await tmdbApi.get(`movie/${movie_id}/reviews`);
  return data;
}

import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./MovieSearchForm.module.css";

const MovieSearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.searchInput.value.trim();
    if (query === "") {
      toast.error("Please set search query.");
      return;
    }
    onSearch(query, 1);
    form.reset();
  };

  return (
    <div>
      <Toaster position="top-right" />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="searchInput"
        />
        <button className={css.searchBtn} type="submit">
          <FiSearch size="18" />
        </button>
      </form>
    </div>
  );
};

export default MovieSearchForm;

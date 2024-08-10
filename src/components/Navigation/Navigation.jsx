import { NavLink } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.logo}>
            <BiSolidMoviePlay size="36" className={css.logoIcon} />
          </NavLink>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
        <a
          className={css.tmdbLink}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TMDB link"
        >
          <span className={css.firstSpan}>Powered by</span>
          <img
            className={css.tmdbLogo}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
            alt="The Movie DB logo"
            width={100}
          />
          <span className={css.secondSpan}>API</span>
        </a>
      </div>
    </header>
  );
};

export default Navigation;

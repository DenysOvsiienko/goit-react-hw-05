import css from "./PaginationNextBtn.module.css";

const PaginationNextBtn = ({ onBtnClick, page }) => {
  return (
    <button
      className={css.paginationBtn}
      type="button"
      onClick={() => onBtnClick(page + 1)}
    >
      Next Page
    </button>
  );
};

export default PaginationNextBtn;

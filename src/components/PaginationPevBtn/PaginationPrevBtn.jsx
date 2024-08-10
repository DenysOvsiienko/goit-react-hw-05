import css from "./PaginationPrevBtn.module.css";

const PaginationPrevBtn = ({ onBtnClick, page }) => {
  return (
    <button
      className={css.paginationBtn}
      type="button"
      onClick={() => onBtnClick(page - 1)}
    >
      Pervious Page
    </button>
  );
};

export default PaginationPrevBtn;

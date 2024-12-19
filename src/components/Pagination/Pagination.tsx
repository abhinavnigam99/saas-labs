import classNames from "classnames";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, onPageChange } = props;
  const getPageNumbers = () => {
    const start = 1;
    const end = totalPages;
    const pageNumbers = [];

    if (currentPage > start) {
      pageNumbers.push(currentPage - 1);
    }

    pageNumbers.push(currentPage);

    if (currentPage < end) {
      pageNumbers.push(currentPage + 1);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className={styles.paginationContainer} aria-label="Pagination">
      <button
        className={classNames(styles.paginationButton, styles.firstLastDisable)}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
      >
        First
      </button>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        Prev
      </button>
      <ul className={styles.paginationList}>
        {pageNumbers.map((page, index) => (
          <li key={index}>
            <button
              className={classNames(
                styles.paginationButton,
                currentPage === page ? styles.active : ""
              )}
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        Next
      </button>
      <button
        className={classNames(styles.paginationButton, styles.firstLastDisable)}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
      >
        Last
      </button>
    </nav>
  );
};

export default Pagination;

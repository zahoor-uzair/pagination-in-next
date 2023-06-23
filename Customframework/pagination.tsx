import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    console.log(page);
  };

  const renderButtons = () => {
    const buttons: JSX.Element[] = [];

    // Show buttons up to a maximum of 6
    const maxButtons = Math.min(totalPages, 6);

    // Calculate the range of buttons to show
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(start + maxButtons - 1, totalPages);

    // Adjust the range if it exceeds the total pages
    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    // Add buttons for the calculated range
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-page ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Add dots if there are more pages
    if (end < totalPages) {
      buttons.push(
        <span key="dots" className="dots">
          ...
        </span>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination-container">
      <button
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div className="pagination-pages">{renderButtons()}</div>
      <button
        className={`pagination-button ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

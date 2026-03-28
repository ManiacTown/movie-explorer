function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="page-btn"
        onClick={() =>
          setCurrentPage((p) => Math.min(p + 1, totalPages))
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
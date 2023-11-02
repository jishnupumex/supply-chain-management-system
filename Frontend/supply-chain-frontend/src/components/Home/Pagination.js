import React from 'react';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  return (
    <div className="pagination w-full flex items-center justify-center gap-1">
      {currentPage > 1 && (
        <button className='mr-2' onClick={() => onPageChange(currentPage - 1)}>
          &laquo; Prev
        </button>
      )}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-6 rounded-md ${currentPage === page ? 'bg-sky-600' : 'bg-slate-300'}`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button className='ml-2'  onClick={() => onPageChange(currentPage + 1)}>
          Next &raquo;
        </button>
      )}
    </div>
  );
};
export default Pagination;
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

function PaginatedItems({ onclickHandler, totalPages }) {
    return (
      <>
        <ReactPaginate
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item previous"
           previousLinkClassName="page-link previous-link"
           nextClassName="page-item next"
           nextLinkClassName="page-link next-link"
        //    breakClassName="page-item"
        //    breakLinkClassName="page-link"
           marginPagesDisplayed={2}
           containerClassName="pagination"
           activeClassName="active"
           activeLinkClassName="active-link"
          breakLabel="..."
          nextLabel=">"
          onPageChange={onclickHandler}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
}

export default PaginatedItems;
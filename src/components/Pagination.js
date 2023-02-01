import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination(props) {
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
          onPageChange={props.onclickHandler}
          forcePage={props.currentPage-1}
          pageRangeDisplayed={5}
          pageCount={props.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
}

export default Pagination;
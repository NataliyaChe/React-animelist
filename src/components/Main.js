import React, { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import PaginatedItems from './PaginatedItems'
// import ReactPaginate from 'react-paginate';

function Main() {
    const [totalPages, setTotalPages] = useState(0);
    const animesPerPage = 25;

    const [currentPage, setCurrentPage] = useState(1);
    const [animes, setAnimes] = useState([]);
    
    useEffect(() => {
      const fetchAnimes = async () => {
        const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
        const animes = await data.json();
        setTotalPages(animes.pagination.items.total);
        setAnimes(animes.data)
      }
      
      fetchAnimes()
    }, [currentPage])
    
    const onclickHandler = (event) => {
      setCurrentPage(event.pageNumber)
   }

function clickOnItem(name) {
  console.log('name', name)
}

  return (
    <div className='main'>
        <AnimeList animes={animes} onItemClick={clickOnItem}/>
        <PaginatedItems 
            itemsPerPage={animesPerPage} 
            onPageChange={onclickHandler} 
            pageCount={totalPages}
        />
        {/* <ReactPaginate
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item previous"
           previousLinkClassName="page-link previous-link"
           nextClassName="page-item next"
           nextLinkClassName="page-link next-link"
        //    breakClassName="page-item"
        //    breakLinkClassName="page-link"
           marginPagesDisplayed={1}
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
        /> */}
    </div>
  );
}

export default Main;
import React, { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import Pagination from './Pagination'
// import ReactPaginate from 'react-paginate';

function Main() {
    const [totalPages, setTotalPages] = useState(0);
    const animesPerPage = 30;

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
      setCurrentPage(event.selected+1)
   }


function clickOnItem(name) {
  console.log('name', name)
}

  return (
    <div className='main'>
        <AnimeList animes={animes} onItemClick={clickOnItem}/>
        <Pagination 
            onclickHandler={onclickHandler} 
            totalPages={totalPages}
        />
    </div>
  );
}

export default Main;
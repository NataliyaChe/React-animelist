import React, { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import PaginatedItems from './PaginatedItems'

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
        console.log('animes', animes.pagination.items.total)
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
        <PaginatedItems itemsPerPage={animesPerPage} onPageChange={onclickHandler}/>
    </div>
  );
}

export default Main;
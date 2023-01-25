
import React, { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import Pagination from './Pagination'
import GenreList from './GenreList'

function Main() {
    const [totalPages, setTotalPages] = useState(0);
    const animesPerPage = 30;

    const [currentPage, setCurrentPage] = useState(1);
    const [animes, setAnimes] = useState([]);

    // const [genres, setGenres] = useState([])
    const [genreID, setGenreID] = useState(0);
    
    useEffect(() => {
      const fetchAnimes = async () => {
        const data = await fetch(`https://api.jikan.moe/v4/anime?genres=${genreID}&limit=${animesPerPage}&page=${currentPage}`);
        const animes = await data.json();
        setTotalPages(animes.pagination.items.total);
        setAnimes(animes.data)
        console.log('data', animes.data)
      }
      fetchAnimes()
    }, [currentPage, genreID])
    

    const onclickHandler = (event) => {
      setCurrentPage(event.selected+1)
   }

  function clickOnItem(name) {
    // console.log('name', name)
  }

function updateGenreID(value) {
  setGenreID(value);
  
}

console.log('genreID value', genreID)

  return (
    <div className='main'>
      <h1 className="title">AnimeList</h1>
      <div className='flex-container'>
        <div>
        <AnimeList animes={animes} onItemClick={clickOnItem}/>
        <Pagination 
            onclickHandler={onclickHandler} 
            totalPages={totalPages}
        />
        </div>
        <GenreList updateGenreID={updateGenreID}/>
      </div>
    </div>
  );
}

export default Main;
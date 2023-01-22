
import React, { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import Pagination from './Pagination'
import GenreList from './GenreList'

function Main() {
    const [totalPages, setTotalPages] = useState(0);
    const animesPerPage = 30;

    const [currentPage, setCurrentPage] = useState(1);
    const [animes, setAnimes] = useState([]);

    const [genres, setGenres] = useState([])
    
    useEffect(() => {
      const fetchAnimes = async () => {
        const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
        const animes = await data.json();
        setTotalPages(animes.pagination.items.total);
        setAnimes(animes.data)
      }
      fetchAnimes()
    }, [currentPage])
    
    useEffect(() => {
      const fetchGenres = async () => {
        const data = await fetch('https://api.jikan.moe/v4/genres/anime');
        const genres = await data.json();
        setGenres(genres.data)
        console.log('genres', genres.data);
      }
      fetchGenres()
    }, [])

    const onclickHandler = (event) => {
      setCurrentPage(event.selected+1)
   }

function clickOnItem(name) {
  console.log('name', name)
}

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
        <GenreList genres={genres}/>
      </div>
        {/* <Pagination 
            onclickHandler={onclickHandler} 
            totalPages={totalPages}
        /> */}
    </div>
  );
}

export default Main;
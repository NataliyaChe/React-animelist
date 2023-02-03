import React, { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import Pagination from './Pagination'
import GenreList from './GenreList'

function Main() {
  const [totalPages, setTotalPages] = useState(0);
  const animesPerPage = 25;

  const [currentPage, setCurrentPage] = useState(1);
  const [animes, setAnimes] = useState([]);

  const [genreID, setGenreID] = useState(0);

  useEffect(() => {
    const fetchAnimes = async () => {
      const link = genreID ? `anime?genres=${genreID}&limit=${animesPerPage}&page=${currentPage}` : `top/anime?limit=${animesPerPage}&page=${currentPage}`
        
      const data = await fetch(`https://api.jikan.moe/v4/${link}`)

      const animes = await data.json();
      setTotalPages(Math.ceil(animes.pagination.items.total / animesPerPage));
      setAnimes(animes.data)
    }
    fetchAnimes()
  }, [currentPage, genreID]);
    
  const onclickHandler = (event) => {
    setCurrentPage(event.selected+1)
  }

  function updateGenreID(event) {
    const defaultId = 0;
    const selectedId = +event.target.dataset.id;
    const isIdsEqual = selectedId === genreID; 
    const newId = isIdsEqual ?  defaultId : selectedId;
    setGenreID(newId);
    setCurrentPage(1); 
  }

  return (
    <div className='main'>
      <div>
        <AnimeList animes={animes}/>
        <Pagination 
          onclickHandler={onclickHandler} 
          totalPages={totalPages}
          updateGenreID={updateGenreID}
          currentPage={currentPage}
        />
      </div>
      <GenreList updateGenreID={updateGenreID} 
        genreID={genreID} 
        setGenreID={setGenreID}/>
    </div>
  );
}

export default Main;
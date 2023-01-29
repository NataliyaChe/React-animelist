
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
          let link
          if(genreID === 0) {
            link = `https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`
          } else {
            link = `https://api.jikan.moe/v4/anime?genres=${genreID}&limit=${animesPerPage}&page=${currentPage}`
          }
          const data = await fetch(link);
          // const animes = await data.json();
        // }
          const animes = await data.json();
          setTotalPages(Math.ceil(animes.pagination.items.total / animesPerPage));
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
  if(value === genreID) {
    setGenreID(0);
    // console.log('value', genreID)
  } else {
    setGenreID(value);
  }
  
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
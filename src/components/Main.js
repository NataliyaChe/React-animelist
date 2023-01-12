import React, { useEffect } from 'react'
import AnimeList from './AnimeList'
import axios from 'axios';

function Main() {
    const [animes, setAnimes] = React.useState([]);

    useEffect(() => {
      const fetchAnimes = async () => {
        const data = await fetch('https://api.jikan.moe/v4/top/anime?_limit=10');
        const animes = await data.json();
        setAnimes(animes.data)
      }
      fetchAnimes()
    }, [])

    // useEffect(() => {
    //   fetch('https://api.jikan.moe/v4/top/anime?_limit=10')
    //     .then(response => response.json())
    //     .then(animes => {
    //       setAnimes(animes.data)
    //     })
    // }, [])
    

function clickOnItem(name) {
  console.log('name', name)
}

  return (
    <div className='main'>
        <AnimeList animes={animes} onItemClick={clickOnItem}/>
    </div>
  );
}

export default Main;
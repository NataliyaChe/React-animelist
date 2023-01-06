import React, { useEffect } from 'react'
import AnimeList from './AnimeList'
import axios from 'axios';

function Main() {
    const [animes, setAnimes] = React.useState([]);

    useEffect(() => {
      fetch('https://api.jikan.moe/v4/top/anime?_limit=10')
        .then(response => response.json())
        .then(animes => {
          setAnimes(animes)
          console.log('fetch')
        })
    }, [])
    // const animes = [
    //     {
    //         id: 1,
    //         name: 'Diamond no Ace',
    //         genre: 'Sports',
    //         format: 'TV Series',
    //         episodes: 75,
    //         studious: 'Madhouse',
    //         rating: 'PG-13',
    //         releaseDate: 2013,
    //     },
    //     {
    //         id: 2,
    //         name: 'Durarara!!',
    //         genre: 'Action',
    //         format: 'TV Series',
    //         episodes: 24,
    //         studious: 'Brains Base',
    //         rating: 'R-17',
    //         releaseDate: 2010,
    //     },
    //     {
    //         id: 3,
    //         name: 'Hoozuki no Reitetsu',
    //         genre: 'Comedy',
    //         format: 'TV Series',
    //         episodes: 13,
    //         studious: 'Wit Studio',
    //         rating: 'PG-13',
    //         releaseDate: 2014,
    //     },
    //     {
    //         id: 4,
    //         name: 'Haikyuu!!',
    //         genre: 'Sports',
    //         format: 'TV Series',
    //         episodes: 25,
    //         studious: 'Production I.G',
    //         rating: 'PG-13',
    //         releaseDate: 2014,
    //     },
    //     {
    //         id: 5,
    //         name: 'Gintama',
    //         genre: 'Shounen',
    //         format: 'TV Series',
    //         episodes: 201,
    //         studious: 'Sunrise',
    //         rating: 'PG-13',
    //         releaseDate: 2006,
    //     },
    //     {
    //         id: 6,
    //         name: 'Genshiken',
    //         genre: 'Comedy',
    //         format: 'TV Series',
    //         episodes: 12,
    //         studious: 'Palm',
    //         rating: 'PG-13',
    //         releaseDate: 2004,
    //     },
    //     {
    //         id: 7,
    //         name: 'Howl no Ugoku Shiro',
    //         genre: 'Fantasy',
    //         format: 'Movie',
    //         episodes: 1,
    //         studious: 'Studio Ghibli',
    //         rating: 'PG-13',
    //         releaseDate: 2004,
    //     },
    //     {
    //         id: 8,
    //         name: 'Mawaru Penguindrum',
    //         genre: 'Drama',
    //         format: 'TV Series',
    //         episodes: 24,
    //         studious: 'Brains Base',
    //         rating: 'R-17',
    //         releaseDate: 2011,
    //     },
    //     {
    //         id: 9,
    //         name: 'Mob Psycho 100',
    //         genre: 'Action',
    //         format: 'TV Series',
    //         episodes: 12,
    //         studious: 'Bones',
    //         rating: 'PG-13',
    //         releaseDate: 2016,
    //     },
    //     {
    //         id: 10,
    //         name: 'Mushishi',
    //         genre: 'Fantasy',
    //         format: 'TV Series',
    //         episodes: 26,
    //         studious: 'Artland',
    //         rating: 'PG-13',
    //         releaseDate: 2005,
    //     },
    //     {
    //         id: 11,
    //         name: 'Sen to Chihiro no Kamikakushi',
    //         genre: 'Fantasy',
    //         format: 'Movie',
    //         episodes: 1,
    //         studious: 'Studio Ghibli',
    //         rating: 'PG-13',
    //         releaseDate: 2001,
    //     },
    //     {
    //         id: 12,
    //         name: 'Saraiya Goyou',
    //         genre: 'Drama',
    //         format: 'TV Series',
    //         episodes: 12,
    //         studious: 'Manglobe',
    //         rating: 'PG-13',
    //         releaseDate: 2010,
    //     },
    //     {
    //         id: 13,
    //         name: 'Ping Pong the Animation',
    //         genre: 'Sports',
    //         format: 'TV Series',
    //         episodes: 11,
    //         studious: 'Tatsunoko Production',
    //         rating: 'PG-13',
    //         releaseDate: 2014,
    //     },
    //     {
    //         id: 14,
    //         name: 'Natsume Yuujinchou',
    //         genre: 'Slice of Life',
    //         format: 'TV Series',
    //         episodes: 13,
    //         studious: 'Brains Base',
    //         rating: 'PG-13',
    //         releaseDate: 2008,
    //     },
    // ]

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
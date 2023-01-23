import React, { useState, useEffect } from 'react'
import GenreItem from './GenreItem'

function GenreList(props) {
    const [genres, setGenres] = useState([]);
    const [genreID, setGenreID] = useState(0);
    // const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
        const data = await fetch('https://api.jikan.moe/v4/genres/anime');
        const genres = await data.json();
        setGenres(genres.data)
        console.log('genres', genres.data);
        }
        fetchGenres()
    }, [])

    function clickOnGenre(event) {
        console.log('genre', event)
        // setGenreID(genre.mal_id);
        console.log('genresID', genreID);
      }
      

    //   useEffect(() => {
    //     const fetchAnimesByGenres = async () => {
    //       const data = await fetch(`https://api.jikan.moe/v4/anime?genres=${genreID}`);
    //       const animes = await data.json();
    //     //   setTotalPages(animes.pagination.items.total);
    //       setAnimes(animes.data)
    //     };
    //     fetchAnimesByGenres();
    //   }, [])

    return (
      <>
        <ul className="genres-container">
            { genres.map(genre => {
                return <GenreItem genre={genre} key={genre.mal_id} onClick={clickOnGenre} />
            }) }
        </ul>
      </>
    );
}

export default GenreList;
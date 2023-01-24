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

    // const clickOnGenre = (event) => {
    //     props.updateGenreID(event.target.mal_id)
    //     console.log('genresID', event.target.mal_id);
    //   }

      function clickOnGenre(event) {
        props.updateGenreID(event.target.key)
        console.log('genresID', event.target);
}

    return (
      <>
        {/* <ul className="genres-container">
            { genres.map(genre => {
                return <GenreItem genre={genre} key={genre.mal_id} onClick={props.clickOnGenre} />
            }) }
        </ul> */}
        <ul className="genres-container">
            { 
                genres.map(genre => (
                    <li className='genre-item' key={genre.mal_id} onClick={clickOnGenre}>
                       {genre.name}
                    </li>
                ))
            }
        </ul> 
      </>
    );
}

export default GenreList;
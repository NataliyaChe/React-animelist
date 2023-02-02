import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react'

function GenreList(props) {
    const [genres, setGenres] = useState([]);
    const [activeGenre, setActiveGenre] = useState(null);
    // const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
        const data = await fetch('https://api.jikan.moe/v4/genres/anime');
        const genres = await data.json();
        setGenres(genres.data)
        }
        fetchGenres()
    }, [])

    function clickOnGenre(event) {
        props.updateGenreID(event.target.dataset.id);
        console.log('active genre', activeGenre, event.target);
        (!activeGenre) ? setActiveGenre(event.target.dataset.id) :
        (activeGenre === event.target.dataset.id) ? setActiveGenre(null) :
        setActiveGenre(event.target.dataset.id);
        // if(activeGenre === null) {
        //     setActiveGenre(event.target.dataset.id);
        // } else if (activeGenre === event.target.dataset.id) {
        //     setActiveGenre(null);
        // } else {
        //     setActiveGenre(event.target.dataset.id);
        // }
    }

    return (
      <>
        <ul className="genres-container">
            { 
                genres.map(genre => (
                    <li className={"genre-item " + (+activeGenre === genre.mal_id ? 'active-genre' : '')} data-id={genre.mal_id} key={genre.mal_id} onClick={clickOnGenre}>
                       {genre.name}
                    </li>
                ))
            }
        </ul> 
      </>
    );
}

export default GenreList;
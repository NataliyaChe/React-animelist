import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react'

function GenreList(props) {
    const [genres, setGenres] = useState([]);

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
        if(props.genreID === 0) {
            props.setGenreID(+event.target.dataset.id);
        } else if (props.genreID === +event.target.dataset.id) {
          props.setGenreID(0);
        } else {
          props.setGenreID(+event.target.dataset.id);
        }
    }
    
    return (
      <>
        <ul className="genres-container">
            { 
                genres.map(genre => (
                    <li className={"genre-item " + (props.genreID == genre.mal_id ? 'active-genre' : '')} data-id={genre.mal_id} key={genre.mal_id} onClick={clickOnGenre}>
                       {genre.name}
                    </li>
                ))
            }
        </ul> 
      </>
    );
}

export default GenreList;
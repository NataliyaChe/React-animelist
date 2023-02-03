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
    
    return (
      <div>
        <h3>Genres:</h3>
        <ul className="genres-container">
            { 
                genres.map(genre => (
                    <li className={"genre-item " + (props.genreID === genre.mal_id ? 'active-genre' : '')} data-id={genre.mal_id} key={genre.mal_id} onClick={props.updateGenreID}>
                       {genre.name}
                    </li>
                ))
            }
        </ul> 
      </div>
    );
}

export default GenreList;
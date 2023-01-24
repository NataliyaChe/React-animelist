import React, { useState, useEffect } from 'react'

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
        props.updateGenreID(event.target.dataset.id)
        console.log('genresID', event.target.dataset.id);
}

    return (
      <>
        <ul className="genres-container">
            { 
                genres.map(genre => (
                    <li className='genre-item' data-id={genre.mal_id} key={genre.mal_id} onClick={clickOnGenre}>
                       {genre.name}
                    </li>
                ))
            }
        </ul> 
      </>
    );
}

export default GenreList;
import React from 'react'
import AnimeItem from './AnimeItem'

function AnimeList(props) {
  return (
    <div className='animelist'>
      <h3>Animes:</h3>
      <div className='animelist-wrapper'>
        { props.animes.map(anime => {
          return <AnimeItem anime={anime} key={anime.mal_id} />
        }) }
      </div>
    </div>
  );
}

export default AnimeList;
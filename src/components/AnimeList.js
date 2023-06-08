import React from 'react';
import AnimeItem from './AnimeItem';

const styles = {
  div: {
    padding: '20px',
    margin: '0 auto'
  }
}

function AnimeList(props) {
  return (
    <div style={styles.div} className='animelist'>
      { props.animes.map(anime => {
        return <AnimeItem anime={anime} key={anime.mal_id} onClick={props.onItemClick} />
      }) }
    </div>
  );
}

export default AnimeList;
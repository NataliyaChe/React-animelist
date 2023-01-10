import React from 'react'
// import SingleAnimePage from './SingleAnimePage'

const styles = {
    div: {
        padding: '10px',
        border: '2px solid teal',
        borderRadius: '10px',
        maxWidth: '150px',
    }
}

function AnimeItem({ anime, onClick }) {
  return (
    <div className='anime-item' style={styles.div} onClick={() => console.log('test')}>
        <h3>{anime.title}</h3>
        <p>{anime.episodes}</p>
        <p>{anime.type}</p>
    </div>
  );
}

export default AnimeItem;
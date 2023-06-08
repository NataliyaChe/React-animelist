import React from 'react';
import {useNavigate} from 'react-router-dom';

const styles = {
  div: {
    padding: '10px',
    border: '2px solid teal',
    borderRadius: '10px',
    maxWidth: '150px',
  }
}

function AnimeItem({ anime, onClick }) {
  let navigate = useNavigate();

  return (
    <div className='anime-item' style={styles.div}>
      <h3>{anime.title}</h3>
      <p>{anime.episodes}</p>
      <p>{anime.type}</p>
      <p>{anime.mal_id}</p>
      <button onClick={() => navigate(`/${anime.mal_id}`)}>Open</button>
    </div>
  );
}

export default AnimeItem;
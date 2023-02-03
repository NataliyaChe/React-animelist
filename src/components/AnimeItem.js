import React from 'react'
import {useNavigate} from 'react-router-dom'

const styles = {
    div: {
        padding: '10px',
        border: '2px solid teal',
        borderRadius: '10px',
        maxWidth: '150px',
    }
}

function AnimeItem({ anime }) {
  let navigate = useNavigate();

  return (
    <div className="anime-item" 
      style={styles.div} 
      onClick={() => navigate(`/${anime.mal_id}`)}>
      <img className="anime-poster" 
        src={anime.images.webp.image_url} 
        alt="anime poster"/>
      <div className="container">
        <h3 className='anime-title'>{anime.title}</h3>
        <div className="flex-wrap">
          <p>{anime.episodes}</p>
          <p>{anime.type}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeItem;
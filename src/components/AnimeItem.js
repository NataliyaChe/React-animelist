import React from 'react'
import {useNavigate} from 'react-router-dom'

function AnimeItem({ anime }) {
  let navigate = useNavigate();

  return (
    <div className="anime-item" 
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
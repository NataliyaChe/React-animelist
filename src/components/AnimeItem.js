import React from 'react'
import {useNavigate} from 'react-router-dom'
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
  let navigate = useNavigate();

  return (
    <div className='anime-item' style={styles.div} onClick={() => navigate(`/${anime.mal_id}`)}>
        <img className="anime-poster" src={anime.images.webp.image_url} alt="anime poster"/>
        <h3 className='anime-title'>{anime.title}</h3>
        <p>{anime.episodes}</p>
        <p>{anime.type}</p>
        {/* <button className='button' onClick={() => navigate(`/${anime.mal_id}`)}>Open</button> */}
    </div>
  );
}

export default AnimeItem;
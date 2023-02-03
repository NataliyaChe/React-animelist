import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


function SingleAnimePage() {
    const params = useParams();
    const [singleAnime, setSingleAnime] = useState({});

    useEffect(() => {
        const fetchSingleAnime = async () => {
          const data = await fetch(`https://api.jikan.moe/v4/anime/${params.mal_id}`);
          const singleAnime = await data.json();
          setSingleAnime(singleAnime.data);
        }
        fetchSingleAnime()
      }, []);
    return (
        <div className='single-anime'>
          <div className="flex-wrap">
            <div >
              <h2>{singleAnime.title}</h2>
              <h3>{singleAnime.title_japanese}</h3>
              <p>
                <span className='bold-text'>Type:</span> {singleAnime.type}
              </p>
              <p>
                <span className='bold-text'>Episodes:</span> {singleAnime.episodes}
              </p>
              <p>
                <span className='bold-text'>Rating</span> {singleAnime.rating}
              </p>
              <p>
                <span className='bold-text'>Year:</span> {singleAnime.year}
              </p>
            </div>
            <img className="single-anime-poster" 
            src={singleAnime?.images?.webp?.large_image_url} 
            alt="anime poster"/>
          </div>
          <p className="anime-synopsis">{singleAnime.synopsis}</p>
        </div>
    );
}

export default SingleAnimePage;
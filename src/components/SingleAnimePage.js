import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function SingleAnimePage(props) {
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
      <h2>{singleAnime.title}</h2>
      <p>{singleAnime.type}</p>
    </div>
  );
}

export default SingleAnimePage;
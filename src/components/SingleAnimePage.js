import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


function SingleAnimePage(props) {
    const params = useParams();
    console.log('params', params);

    const [anime, setSingleAnime] = useState();

    useEffect(() => {
        const fetchSingleAnime = async () => {
          const data = await fetch('https://api.jikan.moe/v4/top/anime/{params.id}');
          const singleAnime = await data.json();
          setSingleAnime(anime.data);
          
        }
        fetchSingleAnime()
      }, []);

    return (
        <div className='single-anime'>
            <h2>Single anime page</h2>
            {/* <p>{anime.title}</p> */}
        </div>
    );
}

export default SingleAnimePage;
import React from 'react'


function GenreItem({ genre, onClick }) {
    return (
      <div className='genre-item' onClick={() => console.log('test', genre.mal_id)}>
          <p>{genre.name}</p>
      </div>
    );
  }

export default GenreItem;
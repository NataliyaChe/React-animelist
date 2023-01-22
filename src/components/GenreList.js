import React from 'react'


function GenreList(props) {
    return (
      <>
        <ul className="genres-container">
            {
                props.genres.map((genre, i) => (
                    <li>
                        {genre.name}
                    </li>
                ))
            }
        </ul>
      </>
    );
}

export default GenreList;
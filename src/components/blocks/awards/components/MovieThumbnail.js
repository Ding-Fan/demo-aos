import React from "react";

export default function MovieThumbnail({ movie }) {
  function onClick(newPage) {
    window.open(newPage, "_blank");
  }
  return (
    <div className='movie-thumbnail' onClick={() => onClick(movie.link)}>
      <div className='ranking'>
        <div className='icon'></div>
        <div className='text'>{movie.ranking}</div>
      </div>
      <div className='content'>
        <div className='picture'>
          <img src={movie.thumbnail} alt='picture' />
        </div>
        <div className='information'>
          <div className='title'>
            {movie.name}
            <span className='rating'>{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

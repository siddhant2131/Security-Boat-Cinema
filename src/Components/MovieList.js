import React from 'react';
import './MovieList.css'; // Import additional CSS for specific components if needed

const movies = [
  { title: 'Movie 1', genre: 'Action', showtimes: ['1:00 PM', '3:00 PM'] },
  { title: 'Movie 2', genre: 'Comedy', showtimes: ['2:00 PM', '4:00 PM'] },
];

function MovieList() {
  return (
    <div className="MovieList">
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Genre: {movie.genre}</p>
          <p>Showtimes: {movie.showtimes.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movies => 
            <div>
              <h3>{movies.title}</h3>
              Time: {movies.time}<br></br>
              Genres:
              <ul>
                {movies.genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
          )}
    </div>
  );
};

export default Movies;

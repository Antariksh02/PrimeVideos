// MovieSearch.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieSearch = () => {
    const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputChange = (event) => {         // input onclick
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchQuery.trim() === '') {
          setMovies([]);
          return;
        }

     
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=2f2c4aa57989c7ea1f3c178484230bef&query=${searchQuery}`;

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          if (data.results) {
            setMovies(data.results);
          }
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch movies when searchQuery changes
    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{background:"white",width:"100%", height:"8vh", paddingLeft:"10px"}}
      />

      <ol >
        {movies?.map((movie) => (
          <li key={movie.id}
           onClick={() => navigate(`/SinglePage/${movie.title ? movie.title : movie.name}/${movie.id}`)}
           style={{fontSize:"18px",cursor:"pointer"}}
           >
            {movie.title}
            </li>
        ))}
      </ol>
    </div>
  );
};

export default MovieSearch;

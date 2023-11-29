import React, { useState } from 'react';
import Column from '../components/Column';
import "../CSS/Home.css";

const Home = () => {
  const [showMovies, setShowMovies] = useState(false);
  const [showTVShows, setShowTVShows] = useState(false);

  const handleMoviesClick = () => {
    setShowMovies(true);
    setShowTVShows(false);
  };

  const handleTVShowsClick = () => {
    setShowMovies(false);
    setShowTVShows(true);
  };

  return (
    <>
    <div className='click-button'>
      <div className='info-button'>
        <button className={showMovies ? "active" : "movies"} onClick={handleMoviesClick}>Movies</button>
        <button className={showTVShows ? "shows" : undefined} onClick={handleTVShowsClick}>TV Shows</button>
      </div>
    </div>
    <div>
            {showMovies && <Column info="Movie Info" />}
      {showTVShows && <Column info="TV Show Info" />}
    </div>
    </>
  );
};

export default Home;

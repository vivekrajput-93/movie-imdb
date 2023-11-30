import React, { useState } from 'react';
import Column from '../components/Column';
import "../CSS/Home.css";
import {fetchMovies, fetchShows} from "../components/Query"
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [showMovies, setShowMovies] = useState(true);
  const [showTVShows, setShowTVShows] = useState(false);

  const handleMoviesClick = () => {
    setShowMovies(true);
    setShowTVShows(false);
  };

  const handleTVShowsClick = () => {
    setShowMovies(false);
    setShowTVShows(true);
  };

  const {data : moviesData} = useQuery({queryKey : ["movies"], queryFn : fetchMovies})

  const {data : showsData} = useQuery({queryKey : ["shows"], queryFn : fetchShows})


  return (
    <>
    <div className='click-button'>
      <div className='info-button'>
        <button className={showMovies ? "movies" : "info-movies"} onClick={handleMoviesClick}>Movies</button>
        <button className={showTVShows ? "shows" : "info-shows"} onClick={handleTVShowsClick}>TV Shows</button>
      </div>
    </div>
    <div>
            {showMovies && <Column data={moviesData && moviesData.results} />}
      {showTVShows && <Column data={ showsData && showsData.results} />}
    </div>
    </>
  );
};

export default Home;

// Column component
import React from 'react';
import "../CSS/Card.css";
import { Link } from 'react-router-dom';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
  }
  return text;
};


const Column = ({ data }) => {
  const maxLength = 200; // Maximum length for description

  return (
    <div className="card-container">
      {data && data.length > 0 ? (
        data.map((item) => (
          <>
          <div className="card" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} />
            <div className="card-details">
              <h3>{item.title || item.name}</h3>
              <p>Release Date: {item.release_date || item.first_air_date}</p>
              <p>{truncateText(item.overview, maxLength)}</p> 
            </div>
          </div>
          </>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Column;

import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Card.css";

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
          <div key={item.id} className="card">
            <Link to={item.media_type == 'movies' ? `/movie/${item.id}` : `/show/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} />
              <div className="card-details">
                <h3>{item.title || item.name}</h3>
                <p>Release Date: {item.release_date || item.first_air_date}</p>
                <p>{truncateText(item.overview, maxLength)}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Column;

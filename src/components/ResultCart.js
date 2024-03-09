import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";
const ResultCart = ({ movie }) => {
  
    const {watchlist,addMovieToWatchList,addMovieToWatched,watched}=useContext(GlobalContext)
    const storedMovie=watchlist.find((o)=>o.id===movie.id);
    const storedMoviee=watched.find((o)=>o.id===movie.id);
  // Use backticks for the template string
  const posterPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>

        <div className="controls">
          <button className="btn" onClick={()=>addMovieToWatchList(movie)}  disabled={storedMovie}>Add to Watchlist</button>
          <button className="btn" onClick={()=>addMovieToWatched(movie)} disabled={storedMoviee}>Add to Watched</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;

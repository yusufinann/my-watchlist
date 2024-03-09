import React, { useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { GlobalContext } from "../context/GlobalState";
const MovieControls = ({ movie, type }) => {
  const { removeFromWatchlist, addMovieToWatched, moveToWatchlist,removeFromWatched } =
    useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i>
              <VisibilityIcon />
            </i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchlist(movie.id)}
          >
            <i>
              <HighlightOffIcon />
            </i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i>
              <VisibilityOffIcon />
            </i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i>
              <HighlightOffIcon />
            </i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;

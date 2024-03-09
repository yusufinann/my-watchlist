import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer"; 

//!create context
export const GlobalContext = createContext();

const initialState = {
//watchlist:[],
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
  //watched: [],
  watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],
};

//! provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  }

  
  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  }
 
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  }

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHED", payload: movie });
  }
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state.watchlist]);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state.watched]);
  
  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  }

  return (
    <GlobalContext.Provider value={{ addMovieToWatchList, watchlist: state.watchlist ,removeFromWatchlist,addMovieToWatched,watched:state.watched,moveToWatchlist,removeFromWatched}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

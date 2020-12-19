import { get } from "axios";
import axios from 'axios'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'



export const SET_GAMES = "SET_GAMES";

//setGames() will make our API call and use the dispatch method to send an action to the reducer.
export function setGames() {
  return function (dispatch) {
    //We don't need to use the full URL, just the path. We added the domain portion as a proxy in the client/package.json file.
    return get("/api/games")
      .then(function (response) {
        dispatch({ type: SET_GAMES, games: response.data });
        //if we get a successful response we will call the dispatch method and send an Action. In this case the action type is SET_GAMES, and we are sending the API response data with the action as a payload called "games." Then the reducer will add it to the store.
      })
      .catch(function (error) {
        console.log(
          error,
          "error from the actions/index.js (setGames) -RawanB"
        );
      });
  };
}

//The only thing we are doing in this action is passing on the game object to the reducer.
export const ADD_GAME = "ADD_GAME";
export function addGame(game) {
  return {
    type: ADD_GAME,
    game: game,
  };
}

export const SET_GAME = "SET_GAME";
export const REMOVE_GAME = "REMOVE_GAME";
export function setGame(game) {
  return {
    type: SET_GAME,
    game: game,
  };
}

export function removeGame(_id) {
  return {
    type: REMOVE_GAME,
    _id: _id,
  };
}

export const REPLACE_GAME = "REPLACE_GAME";
export function replaceGame(game) {
  return {
    type: REPLACE_GAME,
    game: game,
  };
}



export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users') //change
      .then(response => {
        // response.data is the users
        const user = response.data
        dispatch(fetchUserSuccess(user))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUserFailure(error.message))
      })
  }
}

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}
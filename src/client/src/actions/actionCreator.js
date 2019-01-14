import axios from 'axios';

const API_URL = 'http://localhost:3333/api/v1/';
const OMDB_API = 'http://www.omdbapi.com/?apikey=a8aae0f1&';

// Movies actions
export function getMovies() {
    return (dispatch) => {
        dispatch({ type: 'GET_ALL_MOVIES' });
        axios.get(API_URL + 'movies').then((res) => {
            const data = res.data.movies;
            dispatch({ type: 'GET_ALL_MOVIES_SUCCESS', data });
        }).catch((err) => {
            dispatch({ type: 'GET_ALL_MOVIES_ERROR', err });
        });
    };
}

export function editMovie(movie) {
    return (dispatch) => {
        dispatch({ type: 'EDIT_MOVIE' });
        axios.put(API_URL + '/movies/' + movie._id, movie).then((res) => {
            const data = res.data.movie;
            dispatch({ type: 'EDIT_MOVIE_SUCCESS', data });
        }).catch((err) => {
            dispatch({ type: 'EDIT_MOVIE_ERROR', err });
        });
    };
}

export function addMovie(movie) {
    return (dispatch) => {
        dispatch({ type: 'ADD_MOVIE' });
        axios.post(API_URL + '/movies/', movie).then((res) => {
            const data = res.data.movie;
            dispatch({ type: 'ADD_MOVIE_SUCCESS', data });
        }).catch((err) => {
            dispatch({ type: 'ADD_MOVIE_ERROR', err });
        });
    };
}

export function deleteMovie(movieId) {
    return (dispatch) => {
        dispatch({type: 'DELETE_MOVIE'});
        axios.delete(API_URL + '/movies/' + movieId).then((res) => {
            const data = res.data;
            dispatch({type: 'DELETE_MOVIE_SUCCESS', data});
        }).catch((err) => {
            dispatch({type: 'DELETE_MOVIE_ERROR', err});
        });
    }
}

// OMDB API
export function searchOMDB(title) {
    return (dispatch) => {
        dispatch({type: 'SEARCH_MOVIE'});
        axios.get(OMDB_API + 't=' + title).then((res) => {
            const data = res.data;
            dispatch({ type: 'SEARCH_MOVIE_SUCCESS', data });
        }).catch((err) => {
            dispatch({ type: 'SEARCH_MOVIE_ERROR', err });
        });
    };
}
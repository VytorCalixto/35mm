import axios from 'axios';

const API_URL = 'http://localhost:3333/api/v1/';

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
    console.log(movie);
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
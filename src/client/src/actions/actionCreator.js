import request from 'superagent';

const API_URL = 'http://localhost:3333/api/v1/';

// Movies actions
export function getMovies() {
    return (dispatch) => {
        dispatch({type: 'GET_ALL_MOVIES'});
        request.get(API_URL + 'movies').end((err, res) => {
            if(err) {
                dispatch({type: 'GET_ALL_MOVIES_ERROR', err});
            } else {
                const data = JSON.parse(res.text).movies;
                dispatch({type: 'GET_ALL_MOVIES_SUCCESS', data});
            }
        });
    };
}
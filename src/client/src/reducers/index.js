import {combineReducers} from 'redux';
import movies from './movies';
import omdb from './omdb';

const rootReducer = combineReducers({
    movies,
    omdb
});

export default rootReducer;
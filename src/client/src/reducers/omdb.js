function omdb(state = {}, action) {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return state;
        case 'SEARCH_MOVIE_SUCCESS':
            return action.data;
        case 'SEARCH_MOVIE_ERROR':
            return state;
        case 'CLEAN_OMDB':
            return {};
        default:
            return state;
    }
}

export default omdb;
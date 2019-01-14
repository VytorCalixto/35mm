function movies(state = [], action) {
    switch(action.type) {
        case 'GET_ALL_MOVIES':
            return state;
        case 'GET_ALL_MOVIES_ERROR':
            return state;
        case 'GET_ALL_MOVIES_SUCCESS':
            return action.data;
        case 'GET_MOVIE':
            return state;
        case 'POST_MOVIE':
            return state;
        case 'PUT_MOVIE':
            return state;
        default:
            return state;
    }
}

export default movies;
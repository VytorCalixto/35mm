function movies(state = [], action) {
    switch (action.type) {
        case 'GET_ALL_MOVIES':
            return state;
        case 'GET_ALL_MOVIES_ERROR':
            return state;
        case 'GET_ALL_MOVIES_SUCCESS':
            return action.data;
        case 'EDIT_MOVIE':
            return state;
        case 'EDIT_MOVIE_SUCCESS':
            let index = state.findIndex((m) => {
                if(m._id === action.data._id) return true;
                return false;
            })
            return [...state.splice(0, index), action.data, ...state.splice(index+1, state.length)];
        case 'EDIT_MOVIE_ERROR':
            return state;
        default:
            return state;
    }
}

export default movies;
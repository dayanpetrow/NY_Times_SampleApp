import * as actions from '../actions';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_POPULAR_ARTICLES_SUCCESS:
            return [...action.payload.data.results]
        default:
            return state;
    }
}
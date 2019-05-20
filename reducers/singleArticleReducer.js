import * as actions from '../actions';

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_ARTICLE_SUCCESS:
            return {id: action.payload.id}
        default:
            return state;
    }
}
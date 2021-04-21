import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';

const defaultState = {};

const commentsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, state, action.comment);
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId];
            return Object.assign({}, newState);
        default:
            return state;
    }
}

export default commentsReducer;


import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import {CLEAR_ERRORS} from '../actions/song_actions';
import { RECEIVE_LOGIN_MODAL, RECEIVE_SIGNUP_MODAL } from '../actions/ui_actions';

const _defaultErrors = [];

const sessionErrorsReducer = (state = _defaultErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_LOGIN_MODAL:
            return [];
        case RECEIVE_SIGNUP_MODAL:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;

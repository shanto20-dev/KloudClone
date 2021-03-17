import {
    RECEIVE_LOGIN_MODAL,
    RECEIVE_SIGNUP_MODAL,
    CLOSE_MODAL
} from '../actions/ui_actions';

const _default = {loginModal: false, signupModal: false};

const uiReducer = (state = _default, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LOGIN_MODAL:
            return {loginModal:true, signupModal: false};
        case RECEIVE_SIGNUP_MODAL:
            return { loginModal: false, signupModal: true };
        case CLOSE_MODAL:
            return { loginModal: false, signupModal: false };
        default:
            return { loginModal: false, signupModal: false };
    }
};

export default uiReducer;

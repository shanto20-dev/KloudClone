export const RECEIVE_LOGIN_MODAL = "RECEIVE_LOGIN_MODAL";
export const RECEIVE_SIGNUP_MODAL = "RECEIVE_SIGNUP_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";


export const receiveLoginModal = () => {
    return {
        type: RECEIVE_LOGIN_MODAL,
    };
};

export const receiveSignupModal = () => {
    return {
        type: RECEIVE_SIGNUP_MODAL,
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    };
};
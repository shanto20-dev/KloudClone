import {
    fetchUser
} from '../utils/user_util'

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    };
};


export const clearErrors = () => {
    return {type: CLEAR_ERRORS}
}


export const getUser = (userId) => (dispatch) => fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)));
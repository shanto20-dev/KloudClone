import {
    postComment,
    destroyComment,
} from '../utils/comment_util'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};

export const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }

}

export const clearErrors = () => {
    return {type: CLEAR_ERRORS}
}

export const createComment = (comment) => (dispatch) => postComment(song)
    .then(comment => dispatch(receiveComment(comment)), err => dispatch(receiveErrors(err.responseJSON)));

export const deleteComment = (commentId) => (dispatch) => destroyComment(commentId)
    .then(() => dispatch(removeComment(commentId)));
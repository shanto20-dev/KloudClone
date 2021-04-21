export const postComment = comment => {
    return $.ajax({
        url: '/api/comments/',
        method: "POST",
        data: {comment},
    })
};

export const destroyComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE',
    })
};



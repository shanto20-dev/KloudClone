export const fetchUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET',
    })
};

export const patchUser = (user, userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false,
    })
}
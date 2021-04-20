export const postSong = song => {
    return $.ajax({
        url: '/api/songs/',
        method: "POST",
        data: song,
        contentType: false,
        processData: false,
    })
};

export const fetchSongs = () => {
    return $.ajax({
        url: '/api/songs/',
        method: 'GET',
    })
};

export const fetchSong = songId => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'GET',
    })
};

export const destroySong = songId => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'DELETE',
    })
};

export const patchSong = song => {
    return $.ajax({
        url: `/api/songs/${song.id}`,
        method: 'PATCH',
    })
}



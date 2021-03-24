export const postSong = song => {
    debugger
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



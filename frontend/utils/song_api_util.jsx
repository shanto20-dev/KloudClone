export const postSong = song => {
    return $.ajax({
        url: '/api/songs',
        method: 'POST',
        data: { song }
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



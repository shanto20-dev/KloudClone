export const RECEIVE_PLAY = "RECEIVE_PLAY";
export const RECEIVE_PAUSE = "RECEIVE_PAUSE";
export const RECEIVE_SKIP = "RECEIVE_SKIP";
export const RECEIVE_PREV = "RECEIVE_PREV";
export const RECEIVE_MUTE = "RECEIVE_MUTE";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const RECEIVE_QUEUE = "RECEIVE_QUEUE";
export const PLAY_THIS_SONG = "PLAY_THIS_SONG";
export const REMOVE_FROM_QUEUE = "REMOVE_FROM_QUEUE";

export const receivePlay = () => {
    return {
        type: RECEIVE_PLAY,
    };
};

export const receivePause = () => {
    return {
        type: RECEIVE_PAUSE,
    };
};

export const receiveSkip = () => {
    return {
        type: RECEIVE_SKIP,
    }

}

export const receivePrev = () => {
    return {
        type: RECEIVE_PREV,
    }

}

export const receiveMute = () => {
    return {
        type: RECEIVE_MUTE,
    }
}

export const receiveCurrentSong = (songId) => {
    return {
        type: RECEIVE_CURRENT_SONG,
        songId
    }
}

export const playThisSong = (song) => {
    return {
        type: PLAY_THIS_SONG,
        song
    }
}

export const receiveNextSong = () => {
    return {
        type: RECEIVE_NEXT_SONG,
        songId
    }
}

export const receiveQueue = (queue) => {
    return {
        type: RECEIVE_QUEUE,
        queue
    }
}

export const removeFromQueue = () => {
    return ({
        type: REMOVE_FROM_QUEUE
    })
}

export const RECEIVE_PLAY = "RECEIVE_PLAY";
export const RECEIVE_PAUSE = "RECEIVE_PAUSE";
export const RECEIVE_SKIP = "RECEIVE_SKIP";

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



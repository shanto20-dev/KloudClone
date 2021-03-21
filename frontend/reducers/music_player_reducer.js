import {
    RECEIVE_PLAY,
    RECEIVE_PAUSE,
    RECEIVE_SKIP,
    RECEIVE_MUTE,
    RECEIVE_CURRENT_SONG,
    RECEIVE_NEXT_SONG,
} from '../actions/music_player_actions';

const defaultState = {songPlaying: false, muted: false, currentSongId: null};

const musicPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAY:
            return Object.assign({}, state, {songPlaying: true});
        case RECEIVE_PAUSE:
            return Object.assign({}, state, {songPlaying: false});
        case RECEIVE_MUTE:
            return Object.assign({}, state, {muted: !state.muted});
        case RECEIVE_CURRENT_SONG:
            return Object.assign({}, state, {currentSongId: action.songId})
        default:
            return state;
    }
}

export default musicPlayerReducer;


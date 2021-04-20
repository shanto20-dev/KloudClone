import {
    RECEIVE_PLAY,
    RECEIVE_PAUSE,
    RECEIVE_SKIP,
    RECEIVE_MUTE,
    RECEIVE_CURRENT_SONG,
    RECEIVE_QUEUE,
    RECEIVE_PREV,
    PLAY_THIS_SONG
} from '../actions/music_player_actions';

const defaultState = {
    songPlaying: false,
    muted: false,
    currentSongId: 0,
    queue: [],
};

const musicPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAY:
            return Object.assign({}, state, {songPlaying: true});
        case RECEIVE_PAUSE:
            return Object.assign({}, state, {songPlaying: false});
        case RECEIVE_MUTE:
            return Object.assign({}, state, {muted: !state.muted});
        case RECEIVE_SKIP:
            return Object.assign({}, state, {currentSongId: (state.currentSongId + 1) % state.queue.length})
        case RECEIVE_PREV:
            return Object.assign({}, state, { currentSongId: state.currentSongId > 0 ? (state.currentSongId - 1) : 0 })
        case RECEIVE_CURRENT_SONG:
            return Object.assign({}, state, {currentSongId: action.songId})
        case RECEIVE_QUEUE:
            return Object.assign({}, state, {queue: action.queue})
        case PLAY_THIS_SONG:
            let queueCopy = state.queue.slice();
            queueCopy.unshift(action.song); 
            return Object.assign({}, state, {queue: queueCopy}) 
        default:
            return state;
    }
}

export default musicPlayerReducer;


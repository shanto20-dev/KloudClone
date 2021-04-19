import {
    RECEIVE_SONGS,
    RECEIVE_SONG,
} from '../actions/song_actions';

const defaultState = {};

const songsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONGS:
            return Object.assign({}, state, action.songs);
        case RECEIVE_SONG:
            return Object.assign({}, state, action.song);
        default:
            return state;
    }
}

export default songsReducer;


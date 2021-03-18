import {
    postSong,
    fetchSongs,
    fetchSong
} from '../utils/song_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveSongs = (songs) => {
    return {
        type: RECEIVE_SONGS,
        songs
    };
};

export const receiveSong = (song) => {
    return {
        type: RECEIVE_SONG,
        song
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }

}

export const createNewSong = (song) => (dispatch) => postSong(song)
    .then(song => dispatch(receiveSong(song)), err => dispatch(receiveErrors(err.responseJSON)));

export const getSongs = (songs) => (dispatch) => fetchSongs(songs)
    .then(songs => dispatch(receiveSongs(songs)), err => dispatch(receiveErrors(err.responseJSON)));

export const getSong = (song) => (dispatch) => fetchSong(song)
    .then((song) => dispatch(receiveSong(song)));



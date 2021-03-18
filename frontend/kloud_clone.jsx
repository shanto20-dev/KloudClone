import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createNewUser, login, logout, receiveCurrentUser, logoutCurrentUser} from './actions/session_actions'
import { postSession, postUser } from './utils/session_api_util';
import { receiveSignupModal, receiveLoginModal} from './actions/ui_actions'
import { fetchSong, fetchSongs, postSong } from './utils/song_api_util';
import { createNewSong, getSong, getSongs } from './actions/song_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUserId: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    // TESTING FUNCTIONS
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createNewUser = createNewUser;
    window.login = login;
    window.logout = logout;
    window.receiveCurrentUser = receiveCurrentUser;
    window.logoutCurrentUser = logoutCurrentUser;
    window.postSession= postSession;
    window.postUser= postUser;
    window.receiveSignupModal = receiveSignupModal;
    window.receiveLoginModal = receiveLoginModal;
    window.fetchSong = fetchSong;
    window.fetchSongs = fetchSongs;
    window.postSong = postSong;
    window.createNewSong = createNewSong;
    window.getSongs = getSongs;
    window.getSong = getSong;
});


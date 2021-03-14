import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createNewUser, login, logout, receiveCurrentUser, logoutCurrentUser} from './actions/session_actions'
import { postSession, postUser } from './utils/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUserid: window.currentUser.id },
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

});


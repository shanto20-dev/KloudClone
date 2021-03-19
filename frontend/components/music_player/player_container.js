import { connect } from 'react-redux';
import Player from './player';

const mapStateToProps = (state) => {
    return {
        currentSong: Object.values(state.entities.songs)[state.session.currentSongId],
        nextSong: Object.values(state.entities.songs)[state.session.nextSongId],
        songPlaying: state.session.songPlaying
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createNewUser: (user) => dispatch(createNewUser(user)),
    login: (user) => dispatch(login(user)),
    loginModal: () => dispatch(receiveLoginModal()),
    signupModal: () => dispatch(receiveSignupModal()),
    closeModal: () => dispatch(closeModal()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

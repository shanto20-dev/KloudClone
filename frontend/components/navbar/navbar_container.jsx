import { connect } from 'react-redux';
import { createNewUser, login, logout } from '../../actions/session_actions';
import { receiveLoginModal, receiveSignupModal, closeModal } from '../../actions/ui_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

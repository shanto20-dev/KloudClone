import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createNewUser: (user) => dispatch(createNewUser(user)),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

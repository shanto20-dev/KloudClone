import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';
import { receiveLoginModal, closeModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        modal: state.ui.signupModal
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (user) => dispatch(createNewUser(user)),
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        loginModal: () => dispatch(receiveLoginModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';
import {closeModal} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        modal: state.ui.loginModal
    }

}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        signupModal: () => dispatch(receiveSignupModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
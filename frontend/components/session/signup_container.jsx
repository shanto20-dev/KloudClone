import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';
import Login from './login';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (user) => dispatch(createNewUser(user)),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
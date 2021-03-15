import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (user) => dispatch(createNewUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
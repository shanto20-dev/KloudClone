import { connect } from 'react-redux';
import Discover from './discover';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    };
};

export default connect(mapStateToProps)(Discover);

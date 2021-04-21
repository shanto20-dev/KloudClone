import { connect } from 'react-redux';
import { createComment, clearErrors} from '../../actions/comment_actions';
import CreateComments from './create_comments'

const mapStateToProps = (state) => {
    return {
        songComments: Object.values(state.entities.comments),
        currentUserId: state.session.id,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        clearErrors: () => dispatch(clearErrors())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComments);

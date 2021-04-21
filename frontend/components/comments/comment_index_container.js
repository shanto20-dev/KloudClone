import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index'

const mapStateToProps = (state) => {
    return {
        songComments: Object.values(state.entities.comments),
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteComment: commentId => dispatch(deleteComment(commentId))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);

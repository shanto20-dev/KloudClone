import { connect } from 'react-redux';
import { clearErrors, editSong } from '../../actions/song_actions';
import { editUser } from '../../actions/user_actions';
import ProfPicModal from './prof_pic_modal'

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => ({
    editUser: (user, userId) => dispatch(editUser(user, userId)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfPicModal);

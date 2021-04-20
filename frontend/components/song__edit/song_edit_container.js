import { connect } from 'react-redux';
import { clearErrors, editSong } from '../../actions/song_actions';
import SongEdit from './song_edit'

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => ({
    editSong: (song) => dispatch(editSong(song)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongEdit);

import { connect } from 'react-redux';
import { clearErrors, createNewSong } from '../../actions/song_actions';
import SongUpload from './song_upload'

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId,
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => ({
    createNewSong: (song) => dispatch(createNewSong(song)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongUpload);

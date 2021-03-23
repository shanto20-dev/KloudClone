import { connect } from 'react-redux';
import { createNewSong } from '../../actions/song_actions';
import SongUpload from './song_upload'

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId
    };
};

const mapDispatchToProps = dispatch => ({
    createNewSong: (song) => dispatch(createNewSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongUpload);

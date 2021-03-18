import { connect } from 'react-redux';
import { getSongs } from '../../actions/song_actions';
import SongIndex from './song_index'

const mapStateToProps = (state) => {
    return {
        songs: Object.values(state.entities.songs)
    };
};

const mapDispatchToProps = dispatch => ({
    getSongs: () => dispatch(getSongs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);

import { connect } from 'react-redux';
import { receivePlay, receivePause, receiveQueue } from '../../actions/music_player_actions';
import { getSongs } from '../../actions/song_actions';
import SongIndex from './song_index'

const mapStateToProps = (state) => {
    return {
        songs: Object.values(state.entities.songs),
        songPlaying: state.musicPlayer.songPlaying
    };
};

const mapDispatchToProps = dispatch => ({
    getSongs: () => dispatch(getSongs()),
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    loadQueue:  (queue) => dispatch(receiveQueue(queue))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);

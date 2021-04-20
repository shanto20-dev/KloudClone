import { connect } from 'react-redux';
import { receivePlay, receivePause, receiveQueue, receiveCurrentSong, playThisSong } from '../../actions/music_player_actions';
import { getSongs } from '../../actions/song_actions';
import SongIndex from './song_index'

const mapStateToProps = (state) => {
    return {
        songs: Object.values(state.entities.songs),
        songPlaying: state.musicPlayer.songPlaying,
        currentSongId: state.musicPlayer.currentSongId
    };
};

const mapDispatchToProps = dispatch => ({
    getSongs: () => dispatch(getSongs()),
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    loadQueue:  (queue) => dispatch(receiveQueue(queue)),
    makeCurrent: (songId) => dispatch(receiveCurrentSong(songId)),
    playThisSong: (song) => dispatch(playThisSong(song)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);

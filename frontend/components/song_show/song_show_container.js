import { connect } from 'react-redux';
import { receivePlay, receivePause, receiveQueue, receiveCurrentSong, playThisSong} from '../../actions/music_player_actions';
import { getSong, deleteSong, editSong } from '../../actions/song_actions';
import SongShow from './song_show'

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId,
        songs: Object.values(state.entities.songs),
        songPlaying: state.musicPlayer.songPlaying,
        currentSongId: state.musicPlayer.currentSongId,
        thisSong: Object.values(state.entities.songs)[0],
        currentQueue: state.musicPlayer.queue,
        currentSongInfo: Object.values(state.musicPlayer.queue)[0]
    };
};

const mapDispatchToProps = dispatch => ({
    getSong: (songId) => dispatch(getSong(songId)),
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    loadQueue:  (queue) => dispatch(receiveQueue(queue)),
    makeCurrent: (songId) => dispatch(receiveCurrentSong(songId)),
    playThisSong: (song) => dispatch(playThisSong(song)),
    deleteSong: (songId) => dispatch(deleteSong(songId)),
    editSong: (song) => dispatch(editSong(song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongShow);

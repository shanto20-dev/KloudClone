import { connect } from 'react-redux';
import { receivePlay, receivePause, receiveQueue, playThisSong} from '../../actions/music_player_actions';
import {deleteSong, editSong, receiveSongs} from '../../actions/song_actions';
import { editUser, getUser } from '../../actions/user_actions';
import UserShow from './user_show'

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
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    loadQueue:  (queue) => dispatch(receiveQueue(queue)),
    playThisSong: (song) => dispatch(playThisSong(song)),
    deleteSong: (songId) => dispatch(deleteSong(songId)),
    editSong: (song, songId) => dispatch(editSong(song, songId)),
    getUser: (userId) => dispatch(getUser(userId)),
    receiveSongs: (songs) => dispatch(receiveSongs(songs)),
    editUser: (user, userId) => dispatch(editUser(user, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);

import { connect } from 'react-redux';
import Player from './player_hooks';
import {receivePlay, receivePause, receiveMute, receiveQueue, receiveSkip, receivePrev, playThisSong, removeFromQueue} from "../../actions/music_player_actions"

const mapStateToProps = (state) => {
    return {
        currentSong: Object.values(state.musicPlayer.queue)[state.session.currentSongId],
        nextSong: Object.values(state.entities.songs)[state.session.nextSongId],
        songPlaying: state.musicPlayer.songPlaying,
        songMuted: state.musicPlayer.muted,
        songQueue: state.musicPlayer.queue,
        currentSongId: state.musicPlayer.currentSongId,
        songs: state.entities.songs,
    };
};

const mapDispatchToProps = dispatch => ({
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    muteSong: () => dispatch(receiveMute()),
    loadQueue: (queue) => dispatch(receiveQueue(queue)),
    skipSong: () => dispatch(receiveSkip()),
    prevSong: () => dispatch(receivePrev()),
    playThisSong: (song) => dispatch(playThisSong(song)),
    removeFromQueue: () => dispatch(removeFromQueue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

import { connect } from 'react-redux';
import Player from './player';
import {receivePlay, receivePause, receiveMute, receiveQueue, receiveSkip} from "../../actions/music_player_actions"

const mapStateToProps = (state) => {
    return {
        currentSong: Object.values(state.entities.songs)[state.session.currentSongId],
        nextSong: Object.values(state.entities.songs)[state.session.nextSongId],
        songPlaying: state.musicPlayer.songPlaying,
        songMuted: state.musicPlayer.muted,
        songQueue: state.musicPlayer.queue,
        currentSongId: state.musicPlayer.currentSongId
    };
};

const mapDispatchToProps = dispatch => ({
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    muteSong: () => dispatch(receiveMute()),
    loadQueue: (queue) => dispatch(receiveQueue(queue)),
    skipSong: () => dispatch(receiveSkip())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

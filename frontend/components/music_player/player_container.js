import { connect } from 'react-redux';
import Player from './player';
import {receivePlay, receivePause, receiveMute, receiveQueue} from "../../actions/music_player_actions"

const mapStateToProps = (state) => {
    return {
        currentSong: Object.values(state.entities.songs)[state.session.currentSongId],
        nextSong: Object.values(state.entities.songs)[state.session.nextSongId],
        songPlaying: state.musicPlayer.songPlaying,
        songMuted: state.musicPlayer.muted,
    };
};

const mapDispatchToProps = dispatch => ({
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause()),
    muteSong: () => dispatch(receiveMute()),
    loadQueue: () => dispatch(receiveQueue())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

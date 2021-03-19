import { connect } from 'react-redux';
import Player from './player';
import {receivePlay, receivePause} from "../../actions/music_player_actions"

const mapStateToProps = (state) => {
    return {
        currentSong: Object.values(state.entities.songs)[state.session.currentSongId],
        nextSong: Object.values(state.entities.songs)[state.session.nextSongId],
        songPlaying: state.musicPlayer.songPlaying
    };
};

const mapDispatchToProps = dispatch => ({
    playSong: () => dispatch(receivePlay()),
    pauseSong: () => dispatch(receivePause())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

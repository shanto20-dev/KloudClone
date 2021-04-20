import React from 'react';
import SongIndexItem from './song_index_item'

class SongIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSongs();
    }

    render(){
        let songs = this.props.songs;
        if (songs){
            return (
            <>  
                <ul className="songlist">
                    {songs.map((song, index) => {
                        return <SongIndexItem
                            key={index}
                            index={index}
                            song={song}
                            play={this.props.playSong}
                            pause={this.props.pauseSong}
                            songPlaying = {this.props.songPlaying}
                            currentSongId = {this.props.currentSongId}
                            makeCurrent = {this.props.makeCurrent}
                            playThisSong = {this.props.playThisSong}
                            removeFromQueue = {this.props.removeFromQueue}
                        />
                    })}
                </ul>
            </>
            )
        }else{
            return null
        }
        
    }
}

export default SongIndex;
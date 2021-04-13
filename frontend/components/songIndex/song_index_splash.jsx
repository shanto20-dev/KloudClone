import React from 'react';
import SongIndexItem from './song_index_item'

class SongIndexSplash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSongs();
    }

    render(){
        let songs = this.props.songs.slice(0, 5);
        if (songs){
            return (
            <>  
                <ul className="songlist-splashlist">
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

export default SongIndexSplash;
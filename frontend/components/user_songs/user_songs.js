import React from 'react';
import SongIndexItem from '../songIndex/song_index_item'

class UserSongs extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let songs = this.props.userSongs;

        if (songs){
            console.log(songs);
            return (
            <>  
                <ul className="user-song-list">
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

export default UserSongs;
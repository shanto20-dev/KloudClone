import React from 'react';
import UserSongsItem from './user_songs_item';

class UserSongs extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let songs = Object.values(this.props.userSongs);
        if (songs){
            return (
            <>  
                <ul className="user-song-list">
                    {songs.map((song, index) => {
                        return <UserSongsItem
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
                            currentSongInfo = {this.props.currentSongInfo}
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
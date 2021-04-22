import React from 'react';
import { Link } from 'react-router-dom';



class UserSongsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.songAction = this.songAction.bind(this);

    }

    songAction(){
        if (this.props.currentSongId !== this.props.song.id){
            this.props.removeFromQueue();
            this.props.playThisSong(this.props.song);
            this.props.play();
        }else{
            if (this.props.songPlaying){
                this.props.pause()
            }else{
                this.props.play()
            }
        }
    }


    render() {
        let songcover
        if (this.props.song.img_url) {
            songcover = this.props.song.img_url
        }else{
            songcover = "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg"
        }
        return(
        <li className="user-song-item">
                <img className='songcover' src={`${songcover}`} alt="" onClick={this.songAction}/>
                <div className='user-song-details'>
                    <Link to={`/users/${this.props.song.artist_id}`}><h3 className="songartist">{this.props.song.artist}</h3></Link>
                    <Link to={`/songs/${this.props.song.id}`}><h3 className="user-songtitle">{this.props.song.title}</h3></Link>
                </div>
        </li>
        )

    }
}

export default UserSongsItem;
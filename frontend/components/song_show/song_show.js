import React from 'react';
import Discover from '../discover/discover';



class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.songAction = this.songAction.bind(this);

    }

    componentWillMount() {
        this.props.getSong(this.props.match.params.id).then( (song) => {
            this.setState(Object.values(song.song)[0]);
        }); 
    }

    songAction(){
        if (this.props.currentSongId !== this.state.id){
            if (!this.props.songPlaying){
                this.props.makeCurrent(0);
                this.props.playSong();
            }
            else{
                this.props.pauseSong();
            }
        }else{
            if (this.props.songPlaying){
                this.props.pauseSong()
            }else{
                this.props.playSong()
            }
        }
    }


    render() {
        let songInfoPlayButton;
        (this.props.songPlaying) ? songInfoPlayButton = <i className="fas fa-pause showpagemedia"></i> : songInfoPlayButton = <i className="fas fa-play showpagemedia"></i>
        let songcover;
        console.log(this.state);
        if (this.state.img_url) {
            songcover = this.state.img_url
        }else{
            songcover = "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg"
        }
        if (this.state) {
            return(
                <div className='song-show-container'>
                    <div className='song-info-container'>
                        <div className='song-show-details'>
                            <div className='song-player-info'>
                                <button className='song-show-play' onClick={this.songAction}>{songInfoPlayButton}</button>
                                <div className='song-artist-title'>
                                    <h3 className="song-show-artist">{this.state.artist}</h3>
                                    <h3 className="song-show-title">{this.state.title}</h3>
                                </div>
                            </div>
                            <div className='song-cover-container'>
                                <img className='song-show-cover' src={`${songcover}`} alt=""/>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            )
        }
        else{
            return null;
        }

    }
}

export default SongShow;
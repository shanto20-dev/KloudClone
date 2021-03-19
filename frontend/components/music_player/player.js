import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
        this.listener = this.listener.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleHigherVolume = this.handleHigherVolume.bind(this)
        this.handleLowerVolume = this.handleLowerVolume.bind(this)
    }

    handleAction(){
        if (this.props.songPlaying) {
            this.props.pauseSong()
            this.audioEl.current.pause();
        } else {
            this.props.playSong()
            this.audioEl.current.play()
        }
    }

    handleLowerVolume(){
        if (this.audioEl.current.volume > .1){
        this.audioEl.current.volume = (this.audioEl.current.volume - .1)
        }
    }

    handleHigherVolume() {
        if (this.audioEl.current.volume < .9){
        this.audioEl.current.volume = (this.audioEl.current.volume + .1)
        }
    }

    handleMute(){
        console.log(this.props.muted)
        if (!this.props.songMuted){
            this.props.muteSong()
            this.audioEl.current.muted = true;
        }else if (this.props.songMuted){
            this.props.muteSong()
            this.audioEl.current.muted = false;
        }
    }

    listener(){
        if (this.audioEl.current){
            if (!this.props.songPlaying){
                this.audioEl.current.pause();
            }else{
                this.audioEl.current.play()
            }
        }
    }


    render(){
        this.listener();
        let songActionContent;
        let muteContent;
        let duration;
        let currentTime;
        this.audioEl.current ? currentTime = this.audioEl.current.currentTime : currentTime = 0;
        this.audioEl.current ? duration = this.audioEl.current.duration : duration = 0;
        this.props.songPlaying ? songActionContent = "Pause" : songActionContent = "Play";
        this.props.songMuted ? muteContent = "Unmute" : muteContent = "Mute";
        return(
            <div className = "player" >
                <audio src={vibeFrogUrl} ref={this.audioEl}></audio>
                <div className = "controls">
                    <button onClick={this.handleAction} className="playpause"> {songActionContent} </button>
                    <button onClick={this.handleMute} className="mute"> {muteContent} </button>
                    <p className="currentTime">{currentTime}</p>
                    <br/>
                    <p className="duration">{duration}</p>
                    <button onClick={() => this.handleLowerVolume()}>Lower Volume</button>
                    <button onClick={() => this.handleHigherVolume()}>Higher Volume</button>
                </div>
            </div>

        )
    }
}


export default Player;
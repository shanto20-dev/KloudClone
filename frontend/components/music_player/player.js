import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
        this.listener = this.listener.bind(this);
        this.handleMute = this.handleMute.bind(this);
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
        this.props.songPlaying ? songActionContent = "Pause" : songActionContent = "Play";
        this.props.songMuted ? muteContent = "Unmute" : muteContent = "Mute";
        return(
            <div className = "player" >
                <audio src={vibeFrogUrl} ref={this.audioEl}></audio>
                <button onClick={this.handleAction} className="playpause"> {songActionContent} </button>
                <button onClick={this.handleMute} className="mute"> {muteContent} </button>
            </div>

        )
    }
}


export default Player;
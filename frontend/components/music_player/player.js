import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
        this.listener = this.listener.bind(this);
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
        let songActionContent
        this.props.songPlaying ? songActionContent = "Pause" : songActionContent = "Play";
        return(
            <div className = "player" >
                <audio src={vibeFrogUrl} ref={this.audioEl}></audio>
                <button onClick={this.handleAction}> {songActionContent} </button>
            </div>

        )
    }
}


export default Player;
import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
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


    render(){
        console.log(this.props.songPlaying)
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
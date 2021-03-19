import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
    }

    songAction(){
        if (this.props.songPlaying){
            audioEl.play()
        } else{
            audioEl.pause();
        }
        
    }


    render(){
        return(
            <div className = "player" >
                <audio src={this.props.currentSong.src} ref={audioEl}></audio>
            </div>

        )
    }
}


export default Player;
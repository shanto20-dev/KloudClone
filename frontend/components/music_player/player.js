import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            timeCounter: 0,
            volume: 50
        }
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
        this.listener = this.listener.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleTimeinput = this.handleTimeinput.bind(this);
        this.handleVolumeinput = this.handleVolumeinput.bind(this);
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

    formatTime(){
        let min = Math.floor((this.state.timeCounter / 60));
        let sec = Math.floor((this.state.timeCounter - min * 60));
        let secstring = sec < 10 ? `0${sec}` : '${sec}';
        return `${min}:${secstring}`;
    }
    
    formatDuration(duration) {
        let min = Math.floor((duration / 60));
        let sec = Math.floor((duration - min * 60));
        let secstring = sec < 10 ? `0${sec}` : '${sec}';
        return `${min}:${secstring}`;
    }

    timeCounter(){
        if (this.props.songPlaying){
            setInterval(() => this.setState({timeCounter: Math.floor(this.audioEl.current.currentTime)}), 70);
        }

    }

    handleVolumeinput(e){
        this.audioEl.current.volume = (e.target.value / 100);
        this.setState({volume: e.target.value});
    }

    handleTimeinput(e){
        this.audioEl.current.currentTime = e.target.value;
    }


    render(){
        this.listener();
        this.timeCounter();
        let songActionContent;
        let muteContent;
        let duration;
        this.audioEl.current ? duration = Math.floor(this.audioEl.current.duration) : duration = 0;
        this.props.songPlaying ? songActionContent = "Pause" : songActionContent = "Play";
        this.props.songMuted ? muteContent = "Unmute" : muteContent = "Mute";
        return(
            <div className = "player" >
                <audio src={vibeFrogUrl} ref={this.audioEl}></audio>
                <div className = "controls">
                    <button onClick={this.handleAction} className="playpause"> {songActionContent} </button>
                    <button onClick={this.handleMute} className="mute"> {muteContent} </button>
                    <p className="currentTime">{this.formatTime()}</p>
                    <input type='range' className='progslider' value={this.state.timeCounter} ref={this.progressSlider} min="0" max={duration} onInput={this.handleTimeinput}/>
                    <br/>
                    <p className="duration">{this.formatDuration(duration)}</p>
                    <input type='range' className='volslider' value={this.state.volume} ref={this.volumeSlider} min="0" max="100" onInput={this.handleVolumeinput} />
                </div>
            </div>

        )
    }
}


export default Player;
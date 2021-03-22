import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            timeCounter: 0,
            prevVol: 100,
            volume: 100,
            volumeHover: false,
        }
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
        this.listener = this.listener.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleTimeinput = this.handleTimeinput.bind(this);
        this.handleVolumeinput = this.handleVolumeinput.bind(this);
    }

    componentDidMount(){
        this.props.loadQueue([vibeFrogUrl, funkyFrogUrl, froggyFacetimeUrl, yeehawFroggyUrl, froggyGrooveUrl, froggySingsUrl])
    }

    handleAction(){
        console.log(this.state.currentQueueId)
        if (this.props.songPlaying) {
            this.props.pauseSong()
            this.audioEl.current.pause();
        } else {
            this.props.playSong()
            this.audioEl.current.play()
        }
    }

    handleMute(){
        if (!this.props.songMuted){
            this.setState({prevVol: this.audioEl.current.volume * 100})
            this.props.muteSong()
            this.audioEl.current.volume = 0;
            this.setState({volume: 0})
        }else if (this.props.songMuted){
            this.props.muteSong()
            this.audioEl.current.volume = this.state.prevVol / 100;
            this.setState({ volume: this.state.prevVol })
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
        let secstring = sec < 10 ? `0${sec}` : `${sec}`;
        return `${min}:${secstring}`;
    }
    
    formatDuration(duration) {
        if (!duration){
            duration = 0
        }
        let min = Math.floor((duration / 60));
        let sec = Math.floor((duration - min * 60));
        let secstring = sec < 10 ? `0${sec}` : `${sec}`;
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
        this.props.songPlaying ? songActionContent = <i className="fas fa-pause playerpause"></i> : songActionContent = <i className="fas fa-play playerplay"></i>;
        this.props.songMuted ? muteContent = <i className="fas fa-volume-off playerVol" onClick={this.handleMute}></i> : muteContent = <i className="fas fa-volume-up playerVol" onClick={this.handleMute}></i>;
        return(
            <div className = "player" >
                <audio src={this.props.songQueue[this.props.currentSongId]} ref={this.audioEl} onEnded={this.props.skipSong}></audio>
                <div className = "controls">
                    <div className="player-left-buttons">
                        <button className="playerButton"><i className="fas fa-step-backward "></i></button>
                        <button onClick={this.handleAction} className="playpause playerButton"> {songActionContent} </button>
                        <button className="playerButton" onClick={this.props.skipSong}><i className="fas fa-step-forward"></i></button>
                        <button className="playerButton"><i className="fas fa-random"></i></button>
                        <button className="playerButton"><i className="fas fa-redo"></i></button>
                    </div>
                    <p className="currentTime">{this.formatTime()}</p>
                    <input type='range' className='progslider' value={this.state.timeCounter} ref={this.progressSlider} min="0" max={duration} onInput={this.handleTimeinput}/>
                    <br/>
                    <p className="duration">{this.formatDuration(duration)}</p>
                    <div onMouseEnter={() => this.setState({volumeHover: true})} onMouseLeave={() => this.setState({volumeHover:false})} className="volumeControl">
                        <button className="playerButton"> {muteContent}
                            {this.state.volumeHover ? 
                                <div className="volume-bar">
                                    <input type='range' className='volslider' value={this.state.volume} ref={this.volumeSlider} min="0" max="100" onInput={this.handleVolumeinput} /> 
                                    <div className="arrow-down"></div>
                                </div>
                            : null}
                        </button>
                    </div>
                    <div>
                        {/* <img src={this.props.currentSong.img_url}></img> */}



                    </div>
                </div>
            </div>

        )
    }
}


export default Player;
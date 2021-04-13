import React from 'react';

class Player extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            timeCounter: 0,
            prevVol: 100,
            volume: 100,
            volumeHover: false,
            shuffle: false,
            repeat: false
        }
        this.audioEl = React.createRef();
        this.handleAction = this.handleAction.bind(this);
        this.listener = this.listener.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handleTimeinput = this.handleTimeinput.bind(this);
        this.handleVolumeinput = this.handleVolumeinput.bind(this);
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.handleRepeat = this.handleRepeat.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.loadQueue(Object.values(this.props.songs))
        }, 800);
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

    handleShuffle(){
        this.setState({shuffle: !this.state.shuffle})
        let shuffled = !this.state.shuffle
        let queue = Object.values(this.props.songs)
        if (shuffled){
            for (let i = queue.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [queue[i], queue[j]] = [queue[j], queue[i]];
            }
        }
        this.props.loadQueue(queue)
        
    }

    handleSkip(){
        if (!this.state.repeat) {
            this.props.skipSong()
        }
    }

    handleRepeat(){
        this.setState({repeat: !this.state.repeat})
    }



    render(){
        this.listener();
        this.timeCounter();
        let songUrl
        this.props.songQueue.length ? songUrl = (this.props.songQueue[this.props.currentSongId]).songUrl : songUrl = "";
        let currentSong
        this.props.songQueue.length ? currentSong = (this.props.songQueue[this.props.currentSongId]) : currentSong = "";
        let songActionContent;
        let muteContent;
        let duration;
        let shuffle;
        let repeat;
        this.state.shuffle ? shuffle = "shuffle-on" : repeat = "";
        this.state.repeat ? repeat = "repeat-on" : repeat = "";
        this.audioEl.current ? duration = Math.floor(this.audioEl.current.duration) : duration = 0;
        this.props.songPlaying ? songActionContent = <i className="fas fa-pause playerpause"></i> : songActionContent = <i className="fas fa-play playerplay"></i>;
        this.props.songMuted ? muteContent = <i className="fas fa-volume-off playerVol" onClick={this.handleMute}></i> : muteContent = <i className="fas fa-volume-up playerVol" onClick={this.handleMute}></i>;
        if (this.props.location.pathname === '/logout'){
            this.props.pauseSong();
            return null;
        } 
        return(
            <div className = "player" >
                <audio src={songUrl} ref={this.audioEl} onEnded={this.handleSkip}></audio>
                <div className = "controls">
                    <div className="player-left-buttons">
                        <button className="playerButton" onClick={this.props.prevSong}><i className="fas fa-step-backward "></i></button>
                        <button onClick={this.handleAction} className="playpause playerButton"> {songActionContent} </button>
                        <button className="playerButton" onClick={this.handleSkip}><i className="fas fa-step-forward"></i></button>
                        <button className="playerButton" onClick={this.handleShuffle}><i className={`fas fa-random ${shuffle}`}></i></button>
                        <button className="playerButton" onClick={this.handleRepeat}><i className={`fas fa-redo ${repeat}`}></i></button>
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
                    <div className = "playerInfo">
                        <img className="playerCover" src={currentSong.img_url || "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg" }></img>
                        <div className="songInfo">
                        <p className="artist-player">{currentSong.artist}</p>
                        <p className="title-player">{currentSong.title}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Player;
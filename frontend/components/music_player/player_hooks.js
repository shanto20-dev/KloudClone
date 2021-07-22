import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Player = (props) => {

    const [timeCounter, setTimeCounter] = useState(0);
    const [prevVol, setPrevVol] = useState(100);
    const [volume, setVolume] = useState(100);
    const [volumeHover, setVolumeHover] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [songsPlayed, setSongsPlayed] = useState([]);

    let intervals = [];
    
    const audioEl = React.createRef();
    const progressSlider = React.createRef();
    const volumeSlider = React.createRef();


    useEffect(() => {
        props.loadQueue(Object.values(props.songs))
    },[]);

    const handleAction = () => {
        if (props.songPlaying) {
            props.pauseSong()
            audioEl.current.pause();
        } else {
            props.playSong()
            audioEl.current.play()
        }
    }

    
   const handleMute = () => {
        if (!props.songMuted){
            setPrevVol(audioEl.current.volume * 100)
            props.muteSong()
            audioEl.current.volume = 0;
            setVolume(0);
        }else if (props.songMuted){
            props.muteSong()
            audioEl.current.volume = prevVol / 100;
            setVolume(prevVol);
        }
    };

    const listener = () => {
        if (audioEl.current){
            if (!props.songPlaying){
                audioEl.current.pause();
            }else{
                audioEl.current.play()
            }
        }
    };

    const formatTime = () => { 
        let min = Math.floor((timeCounter / 60));
        let sec = Math.floor((timeCounter - min * 60));
        let secstring = sec < 10 ? `0${sec}` : `${sec}`;
        return `${min}:${secstring}`;
    };
    
    const formatDuration = (duration) => {
        if (!duration){
            duration = 0
        }
        let min = Math.floor((duration / 60));
        let sec = Math.floor((duration - min * 60));
        let secstring = sec < 10 ? `0${sec}` : `${sec}`;
        return `${min}:${secstring}`;
    }

    const timeCounterFunction = () => {
        if (props.songPlaying){
            let interval = setInterval(() => {
                if (props.songPlaying){
                    setTimeCounter(Math.floor(audioEl.current.currentTime)), 70;
                }
            })
            intervals.push(interval);
        }
    }

    const handleVolumeinput = (e) => {
        audioEl.current.volume = (e.target.value / 100);
        setVolume(e.target.value);
    }

    const handleTimeinput = (e) => {
        audioEl.current.currentTime = e.target.value;
    }

    const handleShuffle = () => {
        setShuffle(!shuffle)
        let shuffled = !shuffle
        let queue = Object.values(props.songs)
        if (shuffled){
            for (let i = queue.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [queue[i], queue[j]] = [queue[j], queue[i]];
            }
        }
        props.loadQueue(queue)
    }

    const handleSkip = () => {
        if (!repeat && props.songQueue[1]) {
            let newSongsPlayed = songsPlayed.slice();
            newSongsPlayed.push(props.songQueue[0]);
            setSongsPlayed(newSongsPlayed);
            props.removeFromQueue()
        }else{
            props.pauseSong();
        }
    }

    const handlePrev = () => {
        if (songsPlayed.length){
            let newSongsPlayed = songsPlayed.slice(0,-1)
            setSongsPlayed(newSongsPlayed);
            props.playThisSong(songsPlayed[songsPlayed.length - 1]);
        }
    }

    const handleRepeat = () => {
        setRepeat(!repeat);
    }

    useEffect(listener);
    useEffect(timeCounterFunction, []);

    let songUrl;
    props.songQueue.length ? songUrl = props.songQueue[0].songUrl : songUrl = "";

    let currentSong;
    props.songQueue.length ? currentSong = props.songQueue[0] : currentSong = "";

    let songActionContent;
    props.songPlaying ? songActionContent = <i className="fas fa-pause playerpause"></i> : songActionContent = <i className="fas fa-play playerplay"></i>;

    let muteContent;
    props.songMuted ? muteContent = <i className="fas fa-volume-off playerVol" onClick={handleMute}></i> : muteContent = <i className="fas fa-volume-up playerVol" onClick={handleMute}></i>;
    
    let duration;
    audioEl.current ? duration = Math.floor(audioEl.current.duration) : duration = 0;

    let shuffleIcon;
    let repeatIcon;
    shuffle ? shuffleIcon = "shuffle-on" : shuffleIcon = "";
    repeat ? repeatIcon = "repeat-on" : repeatIcon = "";


    return(
        <div className = "player" >
            <audio src={songUrl} ref={audioEl} onEnded={handleSkip}></audio>
            <div className = "controls">
                <div className="player-left-buttons">
                    <button className="playerButton" onClick={handlePrev}><i className="fas fa-step-backward "></i></button>
                    <button className="playpause playerButton" onClick={handleAction}> {songActionContent} </button>
                    <button className="playerButton" onClick={handleSkip}><i className="fas fa-step-forward"></i></button>
                    <button className="playerButton" onClick={handleShuffle}><i className={`fas fa-random ${shuffleIcon}`}></i></button>
                    <button className="playerButton" onClick={handleRepeat}><i className={`fas fa-redo ${repeatIcon}`}></i></button>
                </div>
                <p className="currentTime">{formatTime()}</p>
                <input type='range' className='progslider' value={timeCounter} ref={progressSlider} min="0" max={duration} onInput={handleTimeinput}/>
                <br/>
                <p className="duration">{formatDuration(duration)}</p>
                <div onMouseEnter={() => setVolumeHover(true)} onMouseLeave={() => setVolumeHover(false)} className="volumeControl">
                    <button className="playerButton"> {muteContent}
                        {volumeHover ? 
                            <div className="volume-bar">
                                <input type='range' className='volslider' value={volume} ref={volumeSlider} min="0" max="100" onInput={handleVolumeinput} /> 
                                <div className="arrow-down"></div>
                            </div>
                        : null}
                    </button>
                </div>
                <div className = "playerInfo">
                <Link to={`/songs/${currentSong.id}`}><img className="playerCover" src={currentSong.img_url || "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg" }></img></Link>
                    <div className="songInfo">
                    <Link to={`/users/${currentSong.artist_id}`}><p className="artist-player">{currentSong.artist}</p></Link>
                    <Link to={`/songs/${currentSong.id}`}><p className="title-player">{currentSong.title}</p></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Player;

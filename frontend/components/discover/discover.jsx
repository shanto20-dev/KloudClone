import React from 'react';
import Player_container from '../music_player/player_container';
import SongIndexContainer from '../songIndex/song_index_container'
class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className='discover'>
                    <div className='discoverContent'>
                        <h2 className="discoverTitle">The Upload</h2>
                        <h3 className='discoverSubTitle'>  Newly posted tracks. Just for you</h3>
                        <SongIndexContainer/>

                        <h2 className="discoverTitle">Future Funk</h2>
                        <h3 className='discoverSubTitle'>Come Groove.</h3>
                        <SongIndexContainer />

                        <h2 className="discoverTitle">KloudClone Weekly</h2>
                        <h3 className='discoverSubTitle'>All of KloudClone. Just for you</h3>
                        <SongIndexContainer />

                        <h2 className="discoverTitle">Charts: New & hot</h2>
                        <h3 className='discoverSubTitle'>Up-and-coming tracks on KloudClone</h3>
                        <SongIndexContainer />
                    </div>
                </div>
                <Player_container/>
            </>
        );
    }
};

export default Discover;
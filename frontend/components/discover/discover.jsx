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
                        <div className='left-main'>
                            <div>
                                <h2 className="discoverTitle">The Upload</h2>
                                <h3 className='discoverSubTitle'>  Newly posted tracks. Just for you</h3>
                                <SongIndexContainer/>
                            </div>

                            
                            <div>
                                <h2 className="discoverTitle">Future Funk</h2>
                                <h3 className='discoverSubTitle'>Come Groove.</h3>
                                <SongIndexContainer />
                            </div>

                            <div>
                                <h2 className="discoverTitle">KloudClone Weekly</h2>
                                <h3 className='discoverSubTitle'>All of KloudClone. Just for you</h3>
                                <SongIndexContainer />
                            </div>

                            <div>
                                <h2 className="discoverTitle">Charts: New & hot</h2>
                                <h3 className='discoverSubTitle'>Up-and-coming tracks on KloudClone</h3>
                                <SongIndexContainer />
                            </div>
                        </div>
                        <div className="right-main">
                            <div className = 'right-headers'>
                                <h3 className='discoverSubTitle right-underline'>Who to follow</h3>
                                <h3 className='discoverSubTitle right-underline'> <i className="fas fa-redo"></i> Refresh List</h3>
                            </div>
                            <ul className="who-to-follow">
                                <li>
                                    <div className='charm_img'></div>
                                    <p className='artist'> Charm </p> </li>
                                <li>
                                    <div className='hammad_img'></div> 
                                    <p className='artist'> Hammad </p></li>
                                <li> <div className='kloud_img'></div>
                                    <p className='artist'> Kloud </p></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                {/* <Player_container/> */}
            </>
        );
    }
};

export default Discover;
import React from 'react';
import SongIndexItem from './song_index_item'

class SongIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSongs();
    }
    render(){
        console.log(this.props);
        let songs = this.props.songs;
        if (songs){
            return (
            <>  
                <ul className="songlist">
                    {songs.map((song, index) => {
                        return <SongIndexItem
                            key={index}
                            song={song}
                        />
                    })}
                </ul>
            </>
            )
        }else{
            return null
        }
        
    }
}

export default SongIndex;
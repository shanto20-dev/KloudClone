import React from 'react';



class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

    }


    render() {
        let songcover
        if (this.props.song.img_url) {
            songcover = this.props.song.img_url
        }else{
            songcover = "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg"
        }
        return(
        <li className="songitem">
                <img className='songcover' src={`${songcover}`} alt=""/>
                <h3 className="songtitle">{this.props.song.title}</h3>
                <h3 className="songartist">{this.props.song.artist}</h3>
        </li>
        )

    }
}

export default SongIndexItem;
import React from 'react';
import SongEditContainer from '../song__edit/song_edit_container'
import CreateCommentsContainer from '../create_comments/create_comments_container'



class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songData: {},
            editModal: false,
            songDataEdit: {}

        }
        this.songAction = this.songAction.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
        this.editModal = this.editModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.handleModal = this.handleModal.bind(this);

    }

    componentDidMount() {
        this.props.getSong(this.props.match.params.id).then( (song) => {
            this.setState({songData: Object.values(song.song)[0]});
            this.setState({songDataEdit: Object.values(song.song)[0]})
        }); 
    }

    songAction(){
        if (this.props.currentSongInfo.id !== this.state.songData.id){
                this.props.playThisSong(this.state.songData);
                this.props.playSong();
        }else{
            if (this.props.songPlaying){
                this.props.pauseSong()
            }else{
                this.props.playSong()
            }
        }
    }

    editModal(){
        this.setState({editModal: true})
    }

    deleteSong(){
        this.props.deleteSong(this.state.songData.id).then(() => {
            this.props.history.push('/');
        })

    }

    closeEdit(){
        this.setState({editModal: false});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.songDataEdit.title);
        formData.append('song[genre]', this.state.songDataEdit.genre);
        formData.append('song[description]', this.state.songDataEdit.description);
        formData.append('song[img_url]', this.state.songDataEdit.img_url);
        this.props.editSong(formData, this.state.songDataEdit.id).then( () => {
            this.props.getSong(this.props.match.params.id).then( (song) => {
                this.setState({songData: Object.values(song.song)[0]});
                this.setState({songDataEdit: Object.values(song.song)[0]})
            }); 
        }); 
        let modal = document.getElementsByClassName("modal-box")[0];
        modal.classList.add("modal-exit");
        setTimeout(() => this.closeEdit(), 300)
    }

    handleInput(field) {
        return (e) => {
            let songDataCopy = Object.assign({}, this.state.songDataEdit);
            songDataCopy[field] = e.target.value
            this.setState({
                songDataEdit: songDataCopy
            });
        };
    }

    handleModal(e) {
        if (e.target.className === 'modal-screen') {
            let modal = document.getElementsByClassName("modal-box")[0];
            modal.classList.add("modal-exit");
            setTimeout(() => this.closeEdit(), 300)
        }
    }


    render() {
        let songInfoPlayButton;
        (this.props.songPlaying && this.props.currentSongInfo.id === this.state.songData.id) ? songInfoPlayButton = <i className="fas fa-pause showpagemedia"></i> : songInfoPlayButton = <i className="fas fa-play showpagemedia"></i>
        let songcover;
        console.log(this.state);
        if (this.state.songData.img_url) {
            songcover = this.state.songData.img_url
        }else{
            songcover = "https://i1.sndcdn.com/artworks-000265843283-72z293-t500x500.jpg"
        }
        let deleteButton
        if (this.props.currentUserId === this.state.songData.artist_id) {
            deleteButton = <button onClick={this.deleteSong} className='delete-button'> <i className="fa fa-trash" aria-hidden="true"></i> Delete </button>
        }
        let editButton
        if (this.props.currentUserId === this.state.songData.artist_id) {
            editButton = <button onClick={this.editModal} className='edit-button'> <i className="fas fa-pencil-alt"></i> Edit </button>
        }

        if (this.state) {
            return(
                <div className='song-show-container'>
                    <div className='song-info-container'>
                        <div className='song-show-details'>
                            <div className='song-player-info'>
                                <button className='song-show-play' onClick={this.songAction}>{songInfoPlayButton}</button>
                                <div className='song-artist-title'>
                                    <h3 className="song-show-artist">{this.state.songData.artist}</h3>
                                    <h3 className="song-show-title">{this.state.songData.title}</h3>
                                </div>
                            </div>
                            <div className='song-cover-container'>
                                <img className='song-show-cover' src={`${songcover}`} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='song-buttons-div'>
                        {editButton}
                        {deleteButton}
                    </div>
    
                    <SongEditContainer 
                        editModal={this.state.editModal}
                        title={this.state.songDataEdit.title}
                        img_url={this.state.songDataEdit.img_url}
                        description={this.state.songDataEdit.description}
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}
                        closeEdit = {this.closeEdit}
                        handleModal = {this.handleModal}
                    />
                    <CreateCommentsContainer/>
                </div>
            )
        }
        else{
            return null;
        }

    }
}

export default SongShow;
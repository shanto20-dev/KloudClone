import React from 'react';
import SongEditContainer from '../song__edit/song_edit_container'
import user_songs_container from '../user_songs/user_songs_container';
import UserSongsContainer from '../user_songs/user_songs_container'


class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            editModal: false,
            songDataEdit: {}

        }
        // this.songAction = this.songAction.bind(this);
        // this.deleteSong = this.deleteSong.bind(this);
        // this.editModal = this.editModal.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
        // this.closeEdit = this.closeEdit.bind(this);
        // this.handleModal = this.handleModal.bind(this);
        // this.refreshComments = this.refreshComments.bind(this);

    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.id).then( (user) => {
            this.setState({userData: Object.values(user.user)[0]});
            this.props.receiveSongs(Object.values(user.user)[0].songs);
            this.setState({userSongs: Object.values(user.user)[0].songs})
        }); 
    }

    // refreshComments(){
    //     this.props.getSong(this.props.match.params.id).then((song) => {
    //         this.setState({songData: Object.values(song.song)[0]});
    //     })
    // }

    // songAction(){
    //     if (this.props.currentSongInfo.id !== this.state.songData.id){
    //             this.props.playThisSong(this.state.songData);
    //             this.props.playSong();
    //     }else{
    //         if (this.props.songPlaying){
    //             this.props.pauseSong()
    //         }else{
    //             this.props.playSong()
    //         }
    //     }
    // }

    // editModal(){
    //     this.setState({editModal: true})
    // }

    // deleteSong(){
    //     this.props.deleteSong(this.state.songData.id).then(() => {
    //         this.props.history.push('/');
    //     })

    // }

    // closeEdit(){
    //     this.setState({editModal: false});
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('song[title]', this.state.songDataEdit.title);
    //     formData.append('song[genre]', this.state.songDataEdit.genre);
    //     formData.append('song[description]', this.state.songDataEdit.description);
    //     formData.append('song[img_url]', this.state.songDataEdit.img_url);
    //     this.props.editSong(formData, this.state.songDataEdit.id).then( () => {
    //         this.props.getSong(this.props.match.params.id).then( (song) => {
    //             this.setState({songData: Object.values(song.song)[0]});
    //             this.setState({songDataEdit: Object.values(song.song)[0]})
    //         }); 
    //     }); 
    //     let modal = document.getElementsByClassName("modal-box")[0];
    //     modal.classList.add("modal-exit");
    //     setTimeout(() => this.closeEdit(), 300)
    // }

    // handleInput(field) {
    //     return (e) => {
    //         let songDataCopy = Object.assign({}, this.state.songDataEdit);
    //         songDataCopy[field] = e.target.value
    //         this.setState({
    //             songDataEdit: songDataCopy
    //         });
    //     };
    // }

    // handleModal(e) {
    //     if (e.target.className === 'modal-screen') {
    //         let modal = document.getElementsByClassName("modal-box")[0];
    //         modal.classList.add("modal-exit");
    //         setTimeout(() => this.closeEdit(), 300)
    //     }
    // }


    render() {
        let profPic;
        if (this.state.userData.img_url) {
            profPic = this.state.userData.img_url
        }else{
            profPic = "https://i1.sndcdn.com/avatars-000039709460-h210g8-t500x500.jpg"
        }
        if (this.state.userData){
            return(
                <>
                    <div className='user-show-container'>
                        <div className='user-info-container'>
                            <div className='user-show-details'>
                                <div className='user-show-pic-name'>
                                    <img className='user-show-pic' src={`${profPic}`} alt=""/>
                                    <p className="song-show-title user-show-name">{this.state.userData.username}</p>
                                </div>
                            </div>
                        </div>
                        <div className='user-show-bottom-div'>
                            {this.state.userSongs ?
                            <div className='user-songs-div'>
                                <h3 className='user-songs-header'>All Tracks</h3>
                                <h3 className='recent-header'> Recent </h3>
                                <UserSongsContainer
                                    userSongs={this.state.userSongs}
                                />
                            </div> : 
                            <div className='user-songs-div nothing-div'>
                                <div className='nothing-data'>
                                    <h1 className='nothing-header'>Nothing to hear here</h1>
                                    <p className='nothing-p'>{this.state.userData.username} hasn't uploaded any songs yet.</p>
                                </div>
                            </div>}
                            <div className='user-bottom-right'>
                                <div className='user-tracks-num'>
                                    <h3 className='tracks-header'>Tracks</h3>
                                    {this.state.userSongs ? <p className='tracks-count'> {Object.values(this.state.userSongs).length}</p> : <p className='tracks-count'>0</p>}
                                </div>
                                <div className='footerlinks-discover user-footer'>
                                    <a href="https://github.com/shanto20-dev/" target='blank'>GitHub</a>
                                    <a href="https://www.linkedin.com/in/sayeefalam/" target='blank'>LinkedIn</a>
                                    <a href="https://angel.co/u/sayeef-alam" target='blank'>AngelList</a>
                                    <a href="http://www.sayeefalam.com/" target='blank'>Portfolio</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </>       
            )
        }else{
            return null
        }
    }
}

export default SongShow;
import React from 'react';
import SongEditContainer from '../song__edit/song_edit_container'
import user_songs_container from '../user_songs/user_songs_container';
import UserSongsContainer from '../user_songs/user_songs_container'
import ProfPicModalContainer from '../prof_pic_modal/prof_pic_modal_container'


class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            editModal: false,
            songDataEdit: {}

        }
        this.editModal = this.editModal.bind(this);
        this.handleModal = this.handleModal.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.getUser(this.props.match.params.id).then( (user) => {
            this.setState({userData: Object.values(user.user)[0]});
            this.setState({userDataEdit: Object.values(user.user)[0]});
            this.props.receiveSongs(Object.values(user.user)[0].songs);
            this.setState({userSongs: Object.values(user.user)[0].songs})
        }); 
    }


    editModal(){
        this.setState({editModal: true})
    }

    closeEdit(){
        this.setState({editModal: false});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[img_url]', this.state.userDataEdit.img_url);
        this.props.editUser(formData, this.state.userDataEdit.id).then( () => {
            this.props.getUser(this.props.match.params.id).then( (user) => {
                this.setState({userData: Object.values(user.user)[0]});
                this.setState({userDataEdit: Object.values(user.user)[0]})
            }); 
        }); 
        let modal = document.getElementsByClassName("modal-box")[0];
        modal.classList.add("modal-exit");
        setTimeout(() => this.closeEdit(), 300)
    }

    handleInput(field) {
        return (e) => {
            let userDataCopy = Object.assign({}, this.state.userDataEdit);
            userDataCopy[field] = e.target.value
            this.setState({
                userDataEdit: userDataCopy
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
        let editProfPic
        if (this.props.currentUserId === this.state.userData.id){
            editProfPic = <button className='edit-prof-button' onClick={this.editModal}>Update Image</button>
        }
        let profPic = this.state.userData.img_url;
        if (this.state.userData){
            return(
                <>
                    <div className='user-show-container'>
                        <div className='user-info-container'>
                            <div className='user-show-details'>
                                <div className='user-show-pic-name'>
                                    <div>
                                        <img className='user-show-pic' src={`${profPic}`} alt=""/>
                                        {editProfPic}
                                    </div>
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
                                    <i className="fas fa-music music-icon"></i>
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
                    <ProfPicModalContainer
                        editModal={this.state.editModal}
                        handleModal = {this.handleModal}
                        handleSubmit={this.handleSubmit}
                        handleInput={this.handleInput}
                    />
                </>       
            )
        }else{
            return null
        }
    }
}

export default UserShow;
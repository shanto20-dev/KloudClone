import React from 'react';
import UploadSection from './upload_section'
import DetailsSection from './details_section'
import UploadComplete from './upload_complete';

class SongUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            songFile: null,
            title: "",
            genre: "",
            description: "",
            img_url: "",
            artist_id: this.props.currentUserId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSongUpload = this.handleSongUpload.bind(this);
        this.handleInput= this.handleInput.bind(this);
    }

    handleSongUpload(e){
        e.preventDefault();
        if (e.target.files[0] && e.target.files[0].type === "audio/mpeg"){
            this.setState({currentStep: 2, songFile: e.target.files[0], title: e.target.files[0].name.split(".")[0]})
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('song[title]', this.state.title);
        formData.append('song[genre]', this.state.genre);
        formData.append('song[description]', this.state.description);
        formData.append('song[img_url]', this.state.img_url);
        formData.append('song[artist_id]', this.state.artist_id);
        formData.append('song[audio]', this.state.songFile);
        this.props.createNewSong(formData).then(() => this.setState({currentStep: 3}));
        
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render() {
        if (!this.props.currentUserId){
            this.props.history.push('/');
        }
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        return (
            <>
            <div className='upload-page'>
                <UploadSection 
                currentStep = {this.state.currentStep}
                handleSongUpload = {this.handleSongUpload}
                / >
                <DetailsSection
                    currentStep={this.state.currentStep}
                    title = {this.state.title}
                    handleInput = {this.handleInput}
                    handleSubmit = {this.handleSubmit}
                    errors = {this.props.errors}
                />
                <UploadComplete
                    currentStep={this.state.currentStep}
                    title={this.state.title}
                    artist={this.state.artist}
                    description={this.state.description}
                    photo={this.state.img_url}
                />
            </div>

            </>
        )
        
    }
};

export default SongUpload;
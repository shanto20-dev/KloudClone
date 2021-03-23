import React from 'react';
import UploadSection from './upload_section'
import DetailsSection from './details_section'

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
        this.props.createNewSong(this.state);
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render() {
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
                />
            </div>

            </>
        )
        
    }
};

export default SongUpload;
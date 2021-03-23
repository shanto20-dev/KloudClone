import React from 'react';

class UploadSection extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.currentStep === 1) {
        return(
        <div className="upload-box">
            <div className="upload-content">
                <h1 className="uploadTitle">Drag and drop your tracks here</h1>
                <br />
                <input className="hidden" type="file"
                accept="audio/mpeg" onChange={this.props.handleSongUpload}/>
                <button className="uploadButton" onClick={this.handleSubmit}>or choose files to upload
                </button>
            </div>
        </div>
        )} else{
            return null
        }
    }
}

export default UploadSection;

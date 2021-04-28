import React from 'react';
import { Link } from 'react-router-dom';


class UploadComplete extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentStep === 3) {
            return (
                <div className="upload-box">
                    <h1 className="details-title-success">Upload successful</h1>
                    <div className="details-content">
                        <div className="details-pic-complete">
                            <img src={`${this.props.finalSong.img_url}`} alt="" className="photo-complete"/>
                        </div>
                        <div className="details-form">
                            <p className="complete-desc">{this.props.artist}</p>
                            <Link to={`/songs/${this.props.finalSong.id}`}><p className="complete-title">{this.props.title}</p></Link>
                            <br/>
                            <p className="complete-desc">{this.props.description}</p>
                            <br/>
                            Upload complete.
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default UploadComplete;

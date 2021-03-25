import React from 'react';


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
                            <img src={`${this.props.photo}`} alt="" className="photo-complete"/>
                        </div>
                        <div className="details-form">
                            <p className="complete-desc">{this.props.artist}</p>
                            <p className="complete-title">{this.props.title}</p>
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

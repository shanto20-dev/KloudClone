import React from 'react';

class CreateComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song_id: 0,
            body: ""
        };
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleInput= this.handleInput.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({song_id: this.props.songId});
        this.props.createComment(this.state).then(() => {
            this.setState({body: ""})
            this.props.refreshComments();
        });
    }

    handleInput() {
        return (e) => {
            this.setState({
                body: e.target.value
            });
        };
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render() {
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        let commentBox = document.querySelector('.comment-box');
        let submit = this.handleSubmit;
        if (commentBox){
            commentBox.onkeypress = function(e) {
                if (e.keyCode === 13){
                    submit(e);
                }
            }
        }

        return (
            <>
            <div className='comment-box'>
                <input type="text" value={this.state.body} onChange={this.handleInput()} className="comment-input" placeholder="Write a comment"/>
            </div>
            {errormessage}
            </>
        )
        
    }
};

export default CreateComments;
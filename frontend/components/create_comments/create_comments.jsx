import React from 'react';

class CreateComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songId: 0,
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput= this.handleInput.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log("hit");
        this.setState({songId: this.props.songId})
        this.props.createComment(this.state).then(() => this.setState({body: ""}));
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
        let commentbox = document.querySelector('.comment-box');
        if (commentbox){
            document.onkeydown = function(e) {
                if (e.keycode === 13){
                    handleSubmit(e);
                }
            }
        }

        return (
            <>
            <div className='comment-box'>
                <input type="text" value={this.state.body} onChange={this.handleInput()} className="comment-input" placeholder="Write a comment"/>
            </div>

            </>
        )
        
    }
};

export default CreateComments;
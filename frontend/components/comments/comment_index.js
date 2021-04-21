import React from 'react';

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
        this.state={
            comments: Object.values(this.props.songComments)
        }
    }

    commentDiv(commentInfo){
        console.log(commentInfo);
        return (
        <li>
            <div className='comment-div'>
                <p className='comment-author'>{commentInfo.author}</p>
                <p className='comment-body'>{commentInfo.body}</p>
            </div>
        </li>
        )
    }

    render(){
        console.log(this.state);
        let numComments = this.state.comments.length
        let numCommentsText = <p className='num-comments'> {numComments} comments </p>
        return (
        <>  
        <div className='comments-section'>
            {numCommentsText}
                <ul className="comment-index">
                    {this.state.comments.map((comment) => {
                        return this.commentDiv(comment)
                    })}
                </ul>
        </div>
 
        </>
        )
    }
        
}

export default CommentIndex;
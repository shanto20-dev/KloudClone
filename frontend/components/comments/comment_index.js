import React from 'react';
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
        this.commentDiv = this.commentDiv.bind(this);
    }

    commentDiv(commentInfo){
        console.log(commentInfo);
        if (this.props.currentUserId === commentInfo.author_id) {
            deleteButton = <button onClick={this.deleteComment} className='delete-button'> <i className="fa fa-trash" aria-hidden="true"></i></button>
        }
        return (
        <li>
            <div className='comment-div'>
                <p className='comment-author'>{commentInfo.author}</p>
                <p className='comment-body'>{commentInfo.body}</p>
                {deleteButton}
            </div>
        </li>
        )
    }

    render(){
        let numComments = Object.values(this.props.songComments).length
        let numCommentsText = <p className='num-comments'> {numComments} comments </p>
        return (
        <>  
        <div className='comments-section'>
            {numCommentsText}
                <ul className="comment-index">
                    {Object.values(this.props.songComments).reverse().map((comment, index) => {
                        return <CommentIndexItem
                            commentData={comment}
                            key={index}
                            currentUserId={this.props.currentUserId}
                            deleteComment={this.props.deleteComment}
                            refreshComments = {this.props.refreshComments}
                        />
                    })}
                </ul>
        </div>
 
        </>
        )
    }
        
}

export default CommentIndex;
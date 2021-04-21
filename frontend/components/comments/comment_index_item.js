import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment(){
        this.props.deleteComment(this.props.commentData.id).then(() => this.props.refreshComments());
    }


    render() {
        let deleteButton
        if (this.props.currentUserId === this.props.commentData.author_id) {
            deleteButton = <button onClick={this.deleteComment} className='delete-button comment-delete'> <i className="fa fa-trash" aria-hidden="true"></i></button>
        }
        return(
            <li>
                <div className='comment-div'>
                    <div className="comment-data">
                        <p className='comment-author'>{this.props.commentData.author}</p>
                        <p className='comment-body'>{this.props.commentData.body}</p>
                    </div>
                    <div className='comment-right-side'>
                        {deleteButton}
                    </div>
                </div>
            </li>
        )

    }
}

export default CommentIndexItem;

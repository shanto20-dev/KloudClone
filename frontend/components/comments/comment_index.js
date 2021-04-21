import React from 'react';

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
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
        let numComments = Object.values(this.props.songComments).length
        let numCommentsText = <p className='num-comments'> {numComments} comments </p>
        return (
        <>  
        <div className='comments-section'>
            {numCommentsText}
                <ul className="comment-index">
                    {Object.values(this.props.songComments).reverse().map((comment) => {
                        return this.commentDiv(comment)
                    })}
                </ul>
        </div>
 
        </>
        )
    }
        
}

export default CommentIndex;
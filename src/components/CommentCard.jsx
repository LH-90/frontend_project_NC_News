const CommentCard = ({comments}) => {
    return (
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comment-item">
               <p>{new Date(comment.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
               <p>author: {comment.author}</p>
               <p>{comment.body}</p>
               <p>votes: {comment.votes}</p>
            </li>
            
           ))}
       </ul>
    )
}

export default CommentCard
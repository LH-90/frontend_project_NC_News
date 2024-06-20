
import DeleteComment from "./DeleteComment";

const CommentCard = ({comments, username, setComments, setArticle, setActionMessage }) => {

  
  return (
      <section>
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comment-item">
               <p>{new Date(comment.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
               <p>author: {comment.author}</p>
               <p>{comment.body}</p>
               <p>♡ {comment.votes}</p>
               {username===comment.author ? <DeleteComment comment={comment} comments={comments} setComments={setComments} setArticle={setArticle} setActionMessage={setActionMessage} /> : null}
            </li>
            
           ))}
       </ul>
       
      </section>
    )
}

export default CommentCard
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import CommentAdder from "./CommentAdder";


const CommentsList = ({ article_id, comments, setComments, username, setArticle}) => {

   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(null)
   const [showCommentAdder, setShowCommentAdder] = useState(false);
   const [actionMessage, setActionMessage] = useState("")

    useEffect(() => {
        setIsLoading(true)
        getComments(article_id)
          .then(({comments}) => {
            setComments(comments)
            setIsLoading(false)
            setError(null)
          })
          .catch((error) => {
            setIsLoading(false)
            setError("We can't fetch the comments, please try again later.");
          });
      }, [article_id]);

      if (isLoading) {
        return <p>Loading...</p>
      }
    
      if (error) {
        return error
      }
      const handleNewCommentClick = () => {
        setShowCommentAdder(!showCommentAdder)
        setActionMessage("")
      }

    return (
      <section>
        <button onClick={handleNewCommentClick}>+ add a comment</button>
        {showCommentAdder ? <CommentAdder article_id={article_id} setComments={setComments} username={username} setArticle={setArticle} setActionMessage={setActionMessage} setShowCommentAdder={setShowCommentAdder} /> : null}
        {actionMessage ? <p>{actionMessage}</p> : null}
        <CommentCard comments={comments} username={username} setComments={setComments} setArticle={setArticle} setActionMessage={setActionMessage} />
      </section>
    )

}

export default CommentsList
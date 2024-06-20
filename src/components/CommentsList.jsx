import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";


const CommentsList = ({ article_id, comments, setComments, username, setArticle}) => {

   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState(null)

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
    

    return (
        <CommentCard comments={comments} username={username} setComments={setComments} setArticle={setArticle}/>
    )

}

export default CommentsList
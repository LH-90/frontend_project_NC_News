import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";


const CommentsList = ({ article_id, comments, setComments, error, setError}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getComments(article_id)
          .then(({comments}) => {
            setComments(comments)
            setIsLoading(false)
          })
          .catch((error) => {
            setIsLoading(false)
            setError("We can't fetch the comments, please try again later.");
          });
      }, [article_id, setComments, setError]);
    
    if (isLoading) {
      <p>Loading...</p>
    } 

    if (error) {
        <p>{error}</p>
    }

    return (
        <CommentCard comments={comments}/>
    )
}

export default CommentsList
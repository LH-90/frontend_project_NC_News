import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";


const CommentsList = ({ article_id }) => {

    const [comments, setComments] = useState([]);
    const [error, setError] = useState("");
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
      }, [article_id]);
    
    if (isLoading) {
      <p>Loading...</p>
    } 

    return (
        <CommentCard comments={comments}/>
    )
}

export default CommentsList
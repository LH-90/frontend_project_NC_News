import { useState } from "react";
import { getArticleById } from "../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

const ArticlePage = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [showComments, setShowComments] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
          .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
          })
          .catch((error) => {
            setIsLoading(false)
            setError("We can't fetch the article, please try again later.");
          });
      }, [article_id]);
    
    const handleCommentsClick = () => {
        setShowComments(!showComments)
      };
    
    if (isLoading) {
      <p>Loading...</p>
    } 

    return (
        <section>
               <p>{new Date(article.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
               <h2>{article.title}</h2>
               <p>topic: {article.topic}</p>
               <p>author: {article.author}</p>
               <img src={article.article_img_url}></img>
               <p>votes: {article.votes}</p>
               <button onClick={handleCommentsClick}>🗨 {article.comment_count}</button>
               {showComments ? <CommentsList article_id={article_id} />: null}
        </section>
    )
}

export default ArticlePage
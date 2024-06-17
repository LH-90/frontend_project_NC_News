import { useState } from "react";
import { getArticleById } from "../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    
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
    


    return (
        <section>
               <p>{new Date(article.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
               <h2>{article.title}</h2>
               <p>topic: {article.topic}</p>
               <p>author: {article.author}</p>
               <img src={article.article_img_url}></img>
               <p>votes: {article.votes}</p>
        </section>
    )
}

export default ArticlePage
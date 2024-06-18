import { useState } from "react";
import { getArticleById } from "../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import Votes from "./Votes";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setError("We can't fetch the article, please try again later.")
      })
  }, [article_id])

  const handleCommentsClick = () => {
    setShowComments(!showComments)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
   return <p>{error}</p>
  }

  return (
    <section>
      <p>{new Date(article.created_at).toLocaleString({ timeZone: "GMT" })}</p>
      <h2>{article.title}</h2>
      <p>topic: {article.topic}</p>
      <p>author: {article.author}</p>
      <img src={article.article_img_url}></img>
      <div className="votes-comments">
        <Votes article_id={article_id} article={article} setArticle={setArticle} error= {error} setError = {setError}/>
        <button onClick={handleCommentsClick}>🗨 {article.comment_count}</button>
      </div>
      {showComments ? <CommentsList article_id={article_id} /> : null}
    </section>
  );
};

export default ArticlePage

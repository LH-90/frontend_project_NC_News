import { useState } from "react";
import { getArticles } from "../utils/api";
import { useEffect } from "react";

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
      getArticles()
      .then(({articles}) => {
        setArticles(articles)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])

    return(

      <ul>
        {articles.map((article) => (
          <li key={article.article_id} className="article-item">
            <p>{new Date(article.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
            <h2>{article.title}</h2>
            <p>topic: {article.topic}</p>
            <p>author: {article.author}</p>
            <img src={article.article_img_url}></img>
            <p>votes: {article.votes}</p>
            <p>comments: {article.comment_count}</p>
          </li>
        ))}
      </ul>

    )
}

export default Articles

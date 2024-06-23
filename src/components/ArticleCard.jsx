import { Link } from "react-router-dom"

const ArticleCard = ({articles}) => {
    return (
        <ul>
          {articles.map((article) => (
            <li key={article.article_id} className="article-item">
              <Link to={`/${article.article_id}`} className="article-link">
               <p>{new Date(article.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
               <h2>{article.title}</h2>
               <p>topic: {article.topic}</p>
               <p>author: {article.author}</p>
               <img src={article.article_img_url}></img>
               <p>♡ {article.votes}</p>
               <p>🗨 {article.comment_count}</p>
              </Link> 
            </li>
            
           ))}
       </ul>
    )
}

export default ArticleCard
import { Link } from "react-router-dom"

const ArticleCard = ({articles}) => {
    return (
        <ul>
          {articles.map((article) => (
            <li key={article.article_id} className="article-item">
               <p>{new Date(article.created_at).toLocaleString({ timeZone: 'GMT' })}</p>
              <Link to={`/articles/${article.article_id}`}>
               <h2>{article.title}</h2>
              </Link> 
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

export default ArticleCard
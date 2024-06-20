import { useState } from "react";
import { getArticles } from "../utils/api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [articles, setArticles] = useState([])

    useEffect(() => {
      setIsLoading(true)
      getArticles()
      .then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
        setError(null)
      })
      .catch((error) => {
        setIsLoading(false)
        setError("We can't fetch the articles, please try again later.")
      })
    }, [setIsLoading, setError])

    if (isLoading) {
      return <p>Loading...</p>
    }
  
    if (error) {
      return error
    }
  
    return (
        <ArticleCard articles={articles} />
    )
}

export default ArticlesList

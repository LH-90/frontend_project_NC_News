import { useState } from "react";
import { getArticles } from "../utils/api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {

    const [articles, setArticles] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(true)
      getArticles()
      .then(({articles}) => {
        setArticles(articles)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setError("We can't fetch the articles, please try again later.")
      })
    }, [])

    if (isLoading) {
      <p>Loading...</p>
    }

    return(
      <ArticleCard articles={articles}/>
    )
}

export default ArticlesList

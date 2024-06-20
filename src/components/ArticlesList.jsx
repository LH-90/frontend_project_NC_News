import { useState } from "react";
import { getArticles, getArticlesByTopic } from "../utils/api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  if (!slug) {
    useEffect(() => {
      setIsLoading(true);
      getArticles()
        .then(({ articles }) => {
          setArticles(articles);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError("We can't fetch the articles, please try again later.");
        });
    }, []);
  } else {
    useEffect(() => {
      setIsLoading(true);
      getArticlesByTopic(slug)
        .then(({ articles }) => {
          setArticles(articles);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError("We can't fetch the articles, please try again later.");
        });
    }, [slug]);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return error;
  }

  return <ArticleCard articles={articles} />;
};

export default ArticlesList;

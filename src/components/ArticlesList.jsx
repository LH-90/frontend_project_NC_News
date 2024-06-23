import { useState } from "react";
import { getArticles } from "../utils/api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";
import SortByOrder from "./SortByOrder";

const ArticlesList = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by") || "created_at"
  const order = searchParams.get("order") || "desc"

  const setSortOrder = (sort_by, order) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sort_by);
    newParams.set("order", order);
    setSearchParams(newParams);
  };


    useEffect(() => {
      setIsLoading(true);
      getArticles(topic, sort_by, order)
        .then(({ articles }) => {
          setArticles(articles);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError("We can't fetch the articles, please try again later.");
        });
    }, [topic, sort_by, order]);

  if (error) {
    return error;
  }

  return (
  <section className="articles-list">
    {isLoading ? <p>Loading...</p>: null}
    <SortByOrder sort_by={sort_by} order={order} setSortOrder={setSortOrder}/>
    <ArticleCard articles={articles} />

  </section>

  )
};

export default ArticlesList;

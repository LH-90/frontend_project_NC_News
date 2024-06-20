import ArticlesList from "./ArticlesList";
import { useState } from "react";

const TopicArticlesList = () => {

  const [error, setError] = useState(null);

  if (error) {
    return error;
  }

  return <ArticlesList />;
};

export default TopicArticlesList;

import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopicsList = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then(({ topics }) => {
        setTopics(topics);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("We can't fetch the topics, please try again later.");
      });
  }, []);

  if (error) {
    return error;
  }

  return (
    <ul className="topics-list">
      <li className="topic-item">
        <Link to="/">all</Link>
      </li>
      {topics.map((topic) => (
        <li key={topic.slug} className="topic-item">
          <Link to={`${topic.slug}/articles`}>{topic.slug}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TopicsList;

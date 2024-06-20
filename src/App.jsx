import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";
import TopicArticlesList from "./components/TopicArticlesList";

function App() {

  return (
    <div className="app">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/:slug/articles" element={<TopicArticlesList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";


function App() {

  return (
    <div className="app">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/:article_id" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

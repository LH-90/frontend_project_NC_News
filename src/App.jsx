import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import { useState } from 'react';



function App() {

 

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element ={<ArticlesList />}/>
        <Route path="/articles/:article_id" element ={<ArticlePage />}/>
      </Routes>
      
    </div>
  )
}

export default App

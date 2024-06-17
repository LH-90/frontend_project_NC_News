import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';




function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element ={<Articles />}/>
      </Routes>
      
    </div>
  )
}

export default App

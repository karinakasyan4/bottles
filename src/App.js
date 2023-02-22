import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import History from './History';
import Home from './Home';
import WishList from './WishList';
import './App.css';

function App() {
  return <Router>
      <nav>
        <Link to='/history' className='link'>О напитках</Link>
        <Link to='/home' className='link'>Коллекция</Link>
        <Link to='/wishList' className='link'>Пожелания</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/wishList' element={<WishList/>}/>
      </Routes>
    </Router>


  
}

export default App;

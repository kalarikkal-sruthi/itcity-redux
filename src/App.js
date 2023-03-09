import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import Header from './component/Header/Header';
import './App.css';
import Home from './component/Home/Home';
import MovieDetails from './component/MovieDetail/MovieDetails';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
    <Header></Header>
  
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Movielist</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home />}/> 
        {/* <Route path='/movie/:imdbID*' element={<MovieDetails/>}/> */}
        <Route path="*" element={<PageNotFound />}> </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

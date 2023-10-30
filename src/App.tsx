import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './page/Home/Home';
import Favorites from './page/Favorites/Favorites';
import Movie from './page/Movie/Movie';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

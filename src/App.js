import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/category/:categoryId"} element={<Category />}/>
          <Route path={"/item/:itemId"} element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
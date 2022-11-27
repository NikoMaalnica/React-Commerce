import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Cart } from './pages/Cart';
import { CartProvider } from './context/cartContext';
import UserLayout from './components/UserLayout';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<UserLayout />}>
              <Route index element={<Home />}/>
              <Route path={"/category/:categoryId"} element={<Category />}/>
              <Route path={"/item/:itemId"} element={<ItemDetailContainer />}/>
              <Route path={"/cart"} element={<Cart />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
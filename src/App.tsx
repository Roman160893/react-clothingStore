import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from './pages/cartPage/Cart';
import Clothing from './pages/clothingPage/ClothingPage';
import ItemInfo from './Components/itemInfo/ItemInfo';
import Header from './pages/header/Header';
import HomePage from './pages/homePage/HomePage';
import './reset.css';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/react-clothingStore" element={<HomePage />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/clothing/:id" element={<ItemInfo />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default App;

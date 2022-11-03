import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Clothing from './Components/ClothingPage/ClothingItems';
import ItemInfo from './Components/ClothingPage/ItemInfo/ItemInfo';
import Cart from './Components/Cart/Cart';
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

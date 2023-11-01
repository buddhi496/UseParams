import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import ShopProduct from './Components/ShopProduct';
import Stars from './Components/Stars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shopproduct/:shopName" element={<ShopProduct />} />
        <Route path="/stars" element={<Stars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

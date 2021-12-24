import './App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import ProductList from './productList';
import ProductDetail from './productDetail'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
 
    return (
      <BrowserRouter>
    <Routes>
      <Route path="/products" element={<ProductList/>} />
      <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
  </BrowserRouter>
    );

}

export default App;

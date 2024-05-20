import './App.css';
import React from 'react';
import { PageRouter } from './router';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<PageRouter />} />
    </Routes>
  );
}

export default App;

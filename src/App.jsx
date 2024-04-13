import './App.css';
import React from 'react';
import { PageRouter,SectionRouter } from './router';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<PageRouter />} />
      <Route path='/Section/*' element={<SectionRouter />}/>
    </Routes>
  );
}

export default App;

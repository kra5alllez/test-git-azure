import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Site from './components/Site';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Site/>} />
          <Route path="/:id" element={<Site/>} />
      </Routes>
  );
}

export default App;

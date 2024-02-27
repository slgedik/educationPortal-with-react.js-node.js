// src/App.js
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Quiz from './Quiz';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddQuestion from './AddQuestion';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/add-question' element={<AddQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;

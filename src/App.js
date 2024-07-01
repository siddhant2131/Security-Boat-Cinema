import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact Components={HomePage} />
          <Route path="/register" Components={RegisterPage} />
          <Route path="/login" Components={LoginPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
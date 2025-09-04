import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/NavBar/NavBar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

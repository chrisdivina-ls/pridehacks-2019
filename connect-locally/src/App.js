import React from 'react';
import logo from './logo.svg';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserCard />
    </div>
  );
}

export default App;

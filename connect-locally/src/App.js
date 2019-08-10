import React from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserList />
    </div>
  );
}

export default App;

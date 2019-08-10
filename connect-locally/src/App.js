import React from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <UserList />
    </div>
  );
}

export default App;

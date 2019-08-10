import React from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <UserList />
      <Events />
    </div>
  );
}

export default App;

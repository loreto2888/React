// src/App.jsx

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  const [view, setView] = useState('login'); // login | home

  return (
    <div className="app">
      <Navbar />
      {view === 'login' && <Login setView={setView} />}
      {view === 'home' && <Home />}
      <Footer />
    </div>
  );
}

export default App;

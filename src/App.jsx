// src/App.jsx

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </div>
  );
}

export default App;

// src/App.jsx
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home   from './components/Home'   // <— cambia esta ruta

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

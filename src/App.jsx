import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import Events from './pages/Events';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('preload');
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('preload');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-infrared-darker">
        <div className="grain-overlay" />
        <div className="scanline" />
        <div className="grid-lines fixed inset-0 pointer-events-none opacity-20" />
        
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artist/:category/:id" element={<ArtistDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import Events from './pages/Events';
import CategoryPage from './pages/CategoryPage';

// Wrapper component to trigger glitch animation on route change
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={transitionStage === "fadeIn" ? "page-transition-fast" : ""}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

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
      <div className="relative min-h-screen bg-[#050505]">
        {/* Animated Light Leaks */}
        <div className="light-leak leak-1" />
        <div className="light-leak leak-2" />
        
        <div className="scanline" />
        <div className="grid-lines fixed inset-0 pointer-events-none opacity-10" />
        
        <Navbar />
        
        <main className="relative z-10">
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:category/:id" element={<ArtistDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/category/:category" element={<CategoryPage />} />
            </Routes>
          </PageTransitionWrapper>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
